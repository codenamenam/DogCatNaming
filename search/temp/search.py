
from urllib.parse import quote_plus
from bs4 import BeautifulSoup
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

import json
import re


def search():

    # Chrome 드라이버 설정
    options = webdriver.ChromeOptions()
    options.add_argument("headless")
    driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)

    # URL 만들기
    baseurl = "https://www.google.com/search?q="
    breed = "안녕"

    # JSON -> dictionary
    # jsonObjectWords = json.loads(words)

    # keyList = list(jsonObjectWords.keys())
    # for keyword in keyList:
    # 검색어 만들기
    url = baseurl + quote_plus(breed)
    driver.get(url)
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
            # jsonObjectWords[keyword] = int(searchResult)
            jsonObjectWords = searchResult

    driver.quit()
    print(jsonObjectWords)
