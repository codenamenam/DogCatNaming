
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from . import catSearch
from . import dogSearch


def search():
    options = webdriver.ChromeOptions()
    options.add_argument("headless")
    driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)

    dogSearch.search(driver)
    catSearch.search(driver)

    driver.quit()
