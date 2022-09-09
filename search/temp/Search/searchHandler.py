
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from . import catSearch
from . import dogSearch
from selenium.webdriver.chrome.options import Options
import chromedriver_autoinstaller
chromedriver_autoinstaller.install()


def search():
    '''
    options = webdriver.ChromeOptions()
    options.add_argument("headless")
    user_agent = "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv: 11.0) like Gecko"
    options.add_argument('user-agent='+user_agent)
    driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)    
    '''

    options = Options()
    options.add_argument("headless")
    driver = webdriver.Chrome(options=options)

    dogSearch.search(driver)
    catSearch.search(driver)

    driver.quit()
