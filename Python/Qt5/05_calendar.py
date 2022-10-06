import sys
from PyQt5.QtWidgets import (
  QApplication, QWidget, QToolTip, QPushButton, QMessageBox, QDesktopWidget, QCalendarWidget, QLabel, QVBoxLayout
)
from PyQt5.QtGui import (
  QIcon, QFont
)
from PyQt5.QtCore import QDate

class displayWindow(QWidget):

  def __init__(self):
    super().__init__()
    self.initUI()


  def initUI(self):
    
    vbox = QVBoxLayout(self)

    cal = QCalendarWidget(self)
    cal.setGridVisible(True)
    cal.clicked[QDate].connect(self.showDate)

    vbox.addWidget(cal)
    
    self.lbl = QLabel(self)
    date = cal.selectedDate()
    self.lbl.setText(date.toString())

    vbox.addWidget(self.lbl)

    self.setLayout(vbox)

    # Basic Window Panel Config
    # self.setGeometry(300,300,1280,720)
    self.resize(1280, 720)
    self.center()
    self.setWindowTitle('Cytokine Deuterium')
    self.setWindowIcon(QIcon('material/web.png'))

    self.show()


  def showDate(self, date):
    self.lbl.setText(date.toString())


  # Centering the panel
  def center(self):
    qr = self.frameGeometry()
    cp = QDesktopWidget().availableGeometry().center()
    qr.moveCenter(cp)
    self.move(qr.topLeft())


  # Message Box
  def closeEvent(self, event):

    reply = QMessageBox.question(
      self, 
      'Message', "Are you sure to kill the process?",
      QMessageBox.Yes | QMessageBox.No,
      QMessageBox.No
    )

    if reply == QMessageBox.Yes:
      event.accept()
    else:
      event.ignore()


def main():

  app = QApplication(sys.argv)
  display = displayWindow()
  sys.exit(app.exec_())


if __name__ == '__main__':
  main()