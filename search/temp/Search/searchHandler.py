
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from . import catSearch
from . import dogSearch
from selenium.webdriver.chrome.options import Options
import chromedriver_autoinstaller
chromedriver_autoinstaller.install()


def search():

    options = webdriver.ChromeOptions()
    options.add_argument("headless")
    #options.add_experimental_option('debuggerAddress', '127.0.0.1:9222')
    user_agent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
    options.add_argument('user-agent='+user_agent)
    driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)

    '''
    options = Options()
    options.add_argument("headless")
    driver = webdriver.Chrome(options=options)
    '''

    dogSearch.search(driver)
    catSearch.search(driver)

    driver.quit()
