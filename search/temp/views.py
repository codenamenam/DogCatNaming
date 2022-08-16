from urllib.parse import quote_plus
from django.shortcuts import render

from bs4 import BeautifulSoup
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from django.http import HttpResponse


def search(request):
    # URL 만들기
    baseurl = "https://www.google.com/search?q="
    plusurl = request.GET.get('words')
    url = baseurl + quote_plus(plusurl)

    # Chrome 드라이버 설정
    options = webdriver.ChromeOptions()
    options.add_argument("headless")
    driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)
    driver.get(url)
    html = driver.page_source

    # BeautifulSoup
    setup = BeautifulSoup(html, "html.parser")
    r = setup.select(".appbar")

    for i in r:
        result = i.select_one("#result-stats").text
        print(result)

    driver.close()
    return HttpResponse(result)
