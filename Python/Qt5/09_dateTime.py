from smtplib import quoteaddr
import sys
from PyQt5.QtWidgets import (
  QApplication, QWidget, QToolTip, QPushButton, QMessageBox, QDesktopWidget
)
from PyQt5.QtGui import (
  QIcon, QFont
)
from PyQt5.QtCore import (
  QDate, QTime, QDateTime, Qt
)


def newline(args1):
    i = 0
    while(i < args1):
      print()
      i+=1


def main():

  # Current Date and Time
  now = QDate.currentDate()
  print(now.toString(Qt.ISODate))
  print(now.toString(Qt.DefaultLocaleLongDate))

  datetime = QDateTime.currentDateTime()
  print(datetime.toString())

  time = QTime.currentTime()
  print(time.toString(Qt.DefaultLocaleLongDate))
  newline(1)

  # UTC Time
  now = QDateTime.currentDateTime()
  print('Local datetime: ', now.toString(Qt.ISODate))
  print('Universal datetime: ', now.toUTC().toString(Qt.ISODate))

  print(f'The offset from UTC is: {now.offsetFromUtc()} seconds')

  # Number of Days
  newline(1)
  now = QDate.currentDate()
  d = QDate(1945, 5, 7)
  print(f'Days in month: {d.daysInMonth()}')
  print(f'Days in year: {d.daysInYear()}')

  # Difference in Days
  newline(1)
  xmas1 = QDate(2019, 12, 24)
  xmas2 = QDate(2022, 12, 24)

  now = QDate.currentDate()

  dayspassed = xmas1.daysTo(now)
  print(f'{dayspassed} days have passed since last XMas')

  nofdays = now.daysTo(xmas2)
  print(f'There are {nofdays} days until next XMas')

  # Datetime arithmetics
  newline(1)
  now = QDateTime.currentDateTime()

  print(f'Today:', now.toString(Qt.ISODate))
  print(f'Adding 12 days: {now.addDays(12).toString(Qt.ISODate)}')
  print(f'Subtracting 22 days: {now.addDays(-22).toString(Qt.ISODate)}')

  print(f'Adding 50 seconds: {now.addSecs(50).toString(Qt.ISODate)}')
  print(f'Adding 3 months: {now.addMonths(3).toString(Qt.ISODate)}')
  print(f'Adding 12 years: {now.addYears(12).toString(Qt.ISODate)}')

  # Daylight Saving Time (DST)
  newline(1)
  now = QDateTime.currentDateTime()
  now = QDateTime.currentDateTime()

  print(f'Time zone: {now.timeZoneAbbreviation()}')

  if now.isDaylightTime():
    print(f'The current date falls into DST time')
  else:
    print(f'The current date does not fall into DST time')

  # Unix epoch
  newline(1)
  now = QDateTime.currentDateTime()

  unix_time = now.toSecsSinceEpoch() 
  print(unix_time)

  # Julian Day
  newline(1)
  now = QDate.currentDate()

  print('Gregorian date for today:', now.toString(Qt.ISODate))
  print('Julian day for today:', now.toJulianDay()) 

  d = QDateTime.fromSecsSinceEpoch(unix_time)
  print(d.toString(Qt.ISODate))

  # Historical battles
  newline(1)
  borodino_battle = QDate(1812, 9, 7)
  slavkov_battle = QDate(1805, 12, 2)

  now = QDate.currentDate()

  j_today = now.toJulianDay()
  j_borodino = borodino_battle.toJulianDay()
  j_slavkov = slavkov_battle.toJulianDay()

  d1 = j_today - j_slavkov
  d2 = j_today - j_borodino

  print(f'Days since Slavkov battle: {d1}')
  print(f'Days since Borodino battle: {d2}')

if __name__ == '__main__':
  main()