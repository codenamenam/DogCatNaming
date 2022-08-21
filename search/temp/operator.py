from time import timezone
from apscheduler.schedulers.background import BackgroundScheduler
from .search import search


def start():
    sched = BackgroundScheduler(timezone='Asia/Seoul')  # 시간대 설정
    # sched.add_job(search, 'interval', seconds=10, id='test') #10초 간격
    sched.add_job(search, 'cron', hour='12',
                  minute='0', id='test')  # 7시 23분에 실행
    sched.start()
