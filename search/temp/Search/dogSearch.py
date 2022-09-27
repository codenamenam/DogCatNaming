
from curses import KEY_COMMAND
from bs4 import BeautifulSoup
from ..models import DogSearch
import json
import re
import time
from selenium.webdriver.common.by import By
import requests


def search(driver):

    dogAll = DogSearch.objects.all()
    dogBreedList = dogAll.values('breed')
    dogNameList = dogAll.values()[0].keys()

    # 접속할 url
    url = "https://www.google.com"

    # 접속 시도
    driver.get(url)

    num = 123
    count = 1

    time.sleep(2)
    element = driver.find_element(By.NAME, 'q')
    element.clear()
    element.send_keys("ccdf")
    element.submit()

    for i in dogBreedList:
        breedName = i['breed']
        temp = {}
        temp['breed'] = breedName

        for key in dogNameList:

            if not (key == 'id' or key == 'breed'):
                keyword = "\"" + breedName + " " + key + "\""
                #keyword = breedName + " " + key

                # 검색
                time.sleep(60)
                if count % 10 == 0:
                    time.sleep(100)
                count += 1
                print(keyword)
                element = driver.find_element(By.NAME, 'q')
                element.clear()
                element.send_keys(keyword)
                element.submit()

                html = driver.page_source

                # BeautifulSoup. 얘 잘 안돌아가는거같은데
                setup = BeautifulSoup(html, "html.parser")
                r = setup.select(".appbar")

                for i in r:
                    result = i.select_one("#result-stats").text
                    print(result)
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
        headers = {'Content-Type': 'application/json;'}
        requests.put("http://127.0.0.1:8000/api/dog/",
                     data=json.dumps(temp, ensure_ascii=False).encode('utf-8'), headers=headers)
