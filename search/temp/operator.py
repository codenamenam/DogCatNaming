from time import timezone
from apscheduler.schedulers.background import BackgroundScheduler
from .Search.searchHandler import search


# 서버 시작 시 search 예약실행


def start():
    sched = BackgroundScheduler(timezone='Asia/Seoul')  # 시간대 설정
    sched.add_job(search, 'cron', hour='11',
                  minute='11', id='test')  # 지정된 시각에 실행
    sched.start()
