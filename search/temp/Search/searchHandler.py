
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
    # options.add_argument("headless")
    driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)
    '''

    options = Options()
    options.add_experimental_option("debuggerAddress", "127.0.0.1:9222")
    chrome_driver = f"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    driver = webdriver.Chrome(options=options)

    catSearch.search(driver)
    dogSearch.search(driver)

    driver.quit()
