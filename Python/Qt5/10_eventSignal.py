from smtplib import quoteaddr
import sys
from PyQt5.QtWidgets import (
  QApplication, QWidget, QToolTip, QPushButton, QMessageBox, QDesktopWidget,
  QLCDNumber, QSlider, QVBoxLayout, QGridLayout, QLabel, QMainWindow
)
from PyQt5.QtGui import (
  QIcon, QFont
)
from PyQt5.QtCore import (
  QDate, QTime, QDateTime, Qt, QObject, pyqtSignal
)


def newline(args1):
    i = 0
    while(i < args1):
      print()
      i+=1


class Communicate(QObject):
  closeApp = pyqtSignal()


class Example(QMainWindow):

    def __init__(self):
      super().__init__()

      self.initUI()


    def initUI(self):

      # # Signal and Slots
      # lcd = QLCDNumber(self)
      # sld = QSlider(Qt.Horizontal, self)

      # vbox = QVBoxLayout()
      # vbox.addWidget(lcd)
      # vbox.addWidget(sld)

      # sld.valueChanged.connect(lcd.display)

      # # Event Object
      # grid = QGridLayout()

      # y = 0
      # x = 0

      # self.text = f'x:{x}, y: {y}'
      # self.label = QLabel(self.text, self)
      # grid.addWidget(self.label,0 ,0, Qt.AlignTop)

      # self.setMouseTracking(True)

      # Event Sender - Needs QMain Window
      btn1 = QPushButton("Button 1", self)
      btn1.move(30, 50)

      btn2 = QPushButton("Button 2", self)
      btn2.move(150, 50)

      btn1.clicked.connect(self.buttonClicked)
      btn2.clicked.connect(self.buttonClicked)

      self.statusBar()

      # Emitting signal
      self.c = Communicate()
      self.c.closeApp.connect(self.close)

      # Config
      # master = QVBoxLayout()
      # master.addLayout(vbox)
      # master.addLayout(grid)

      # self.setLayout(master)

      self.setGeometry(300, 300, 250, 150)
      self.setWindowTitle('Signal and slot')
      self.show()

    # # Event handler
    # def keyPressEvent(self, e):
    #   if e.key() == Qt.Key_Escape:
    #     self.close()

    # def mouseMoveEvent(self, e):
    #   x = e.x()
    #   y = e.y()

    #   text = f'x: {x},  y: {y}'
    #   self.label.setText(text)
    
    def mousePressEvent(self, event):

        self.c.closeApp.emit()

    def buttonClicked(self):
      sender = self.sender()
      self.statusBar().showMessage(sender.text() + ' was pressed')


def main():
  app = QApplication(sys.argv)
  ex = Example()
  sys.exit(app.exec_())


if __name__ == '__main__':
  main()