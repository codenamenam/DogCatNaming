
from curses import KEY_COMMAND
from bs4 import BeautifulSoup
from ..models import CatSearch
import json
import re
import time
from selenium.webdriver.common.by import By
import requests


def search(driver):

    catAll = CatSearch.objects.all()
    catBreedList = catAll.values('breed')
    catNameList = catAll.values()[0].keys()

    # 접속할 url
    url = "https://www.google.com"

    # 접속 시도
    driver.get(url)

    num = 123
    count = 1

    time.sleep(2)
    element = driver.find_element(By.NAME, 'q')
    element.clear()
    element.send_keys("asdf")
    element.submit()

    for i in catBreedList:
        breedName = i['breed']
        temp = {}
        temp['breed'] = breedName

        for key in catNameList:

            if not (key == 'id' or key == 'breed'):
                keyword = "\"" + breedName + " " + key + "\""

                # 검색
                time.sleep(3)
                if count % 10 == 0:
                    time.sleep(60)
                count += 1
                print(keyword)
                element = driver.find_element(By.NAME, 'q')
                if element == None:
                    time.sleep(30)
                    element = driver.find_element(By.NAME, 'q')

                element.clear()
                element.send_keys(keyword)
                driver.find_element(By.XPATH,
                                    '//*[@id="tsf"]/div[1]/div[1]/div[2]/button').click()

                html = driver.page_source

                # BeautifulSoup
                setup = BeautifulSoup(html, "html.parser")
                r = setup.select(".appbar")

                for i in r:
                    result = i.select_one("#result-stats").text

                    # 검색결과 약 0000개 (0.XX)초 slicing
                    index = -1
                    for c in result:
                        if (c != "개"):
                            index += 1
                        else:
                            break

                    searchResult = re.sub(r'[^0-9]', '', result[:index+1])
                    num = int(searchResult)
                    temp[key] = num
                    break

        # 검색결과
        #print(json.dumps(temp, ensure_ascii=False))
        headers = {'Content-Type': 'application/json;'}
        requests.put("http://127.0.0.1:8000/api/cat/",
                     data=json.dumps(temp, ensure_ascii=False).encode('utf-8'), headers=headers)

    driver.close()
