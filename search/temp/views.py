from urllib.parse import quote_plus
from django.shortcuts import render

from bs4 import BeautifulSoup
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from django.http import HttpResponse

import json


def search(request):
    # Chrome 드라이버 설정
    options = webdriver.ChromeOptions()
    options.add_argument("headless")
    driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)

    # URL 만들기
    baseurl = "https://www.google.com/search?q="
    words = request.GET.get('words')  # 그냥 stringify해버림..
    jsonObjectWords = json.loads(words)  # dictionary

    message = ""
    keyList = list(jsonObjectWords.keys())
    for keyword in keyList:
        url = baseurl + quote_plus(keyword)
        driver.get(url)
        html = driver.page_source

        # BeautifulSoup
        setup = BeautifulSoup(html, "html.parser")
        r = setup.select(".appbar")

        for i in r:
            result = i.select_one("#result-stats").text
            message += result

    driver.close()
    return HttpResponse(message)
