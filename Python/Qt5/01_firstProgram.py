import sys
from PyQt5.QtWidgets import (
  QApplication, QWidget, QToolTip, QPushButton, QMessageBox, QDesktopWidget
)
from PyQt5.QtGui import (
  QIcon, QFont
)

class displayWindow(QWidget):

  def __init__(self):
    super().__init__()
    self.initUI()


  def initUI(self):
    
    # Tooltip Config
    QToolTip.setFont(QFont('Fira Code', 12))
    self.setToolTip('This is a <b>QWidget</b> widget')

    btn = QPushButton('Button',self)
    btn.setToolTip('This is a <b>QPushButton</b> widget')
    btn.resize(btn.sizeHint())
    btn.move(50,50)

    # Closing a window
    qbtn = QPushButton('Quit',self)
    qbtn.clicked.connect(QApplication.instance().quit)
    qbtn.resize(qbtn.sizeHint())
    qbtn.move(50, 100)

    # Basic Window Panel Config
    # self.setGeometry(300,300,1280,720)
    self.resize(1280, 720)
    self.center()
    self.setWindowTitle('Cytokine Deuterium')
    self.setWindowIcon(QIcon('material/web.png'))

    self.show()


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