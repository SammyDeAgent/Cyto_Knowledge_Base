import sys
from PyQt5.QtWidgets import (
  QApplication, QWidget, QToolTip, QPushButton, QMessageBox, QDesktopWidget, QCheckBox, QFrame,
  QLabel, QSlider, QProgressBar
)
from PyQt5.QtGui import (
  QIcon, QFont, QColor, QPixmap
)
from PyQt5.QtCore import Qt, QBasicTimer

class displayWindow(QWidget):

  def __init__(self):
    super().__init__()
    self.initUI()


  def initUI(self):

    # Checkbox Widget
    cb1 = QCheckBox('Show title', self)
    cb1.move(100,150)
    cb1.toggle()
    cb1.stateChanged.connect(self.changeTitle)

    # Toggle Button Widget  
    self.col = QColor(0,0,0)

    redb = QPushButton('Red', self)
    redb.setCheckable(True)
    redb.move(100,250)
    redb.clicked[bool].connect(self.setColor)

    greenb = QPushButton('Green', self)
    greenb.setCheckable(True)
    greenb.move(200,250)
    greenb.clicked[bool].connect(self.setColor)

    blueb = QPushButton('Blue', self)
    blueb.setCheckable(True)
    blueb.move(300,250)
    blueb.clicked[bool].connect(self.setColor)

    self.square = QFrame(self)
    self.square.setGeometry(700,0,500,720)
    self.square.setStyleSheet("QWidget {background-color: %s}" % self.col.name())
    
    # Slider Widget
    sld = QSlider(Qt.Horizontal, self)
    sld.setFocusPolicy(Qt.NoFocus)
    sld.setGeometry(100, 350, 200, 30)
    sld.valueChanged[int].connect(self.changeValue)

    self.label = QLabel(self)
    self.label.setPixmap(QPixmap('material/mute.png'))
    self.label.setGeometry(350, 350, 350, 250)

    # Progress Bar Widget
    self.pbar = QProgressBar(self)
    self.pbar.setGeometry(100, 550, 350, 25)

    self.btn2 = QPushButton('Start', self)
    self.btn2.move(100, 650)
    self.btn2.clicked.connect(self.doAction)

    self.timer = QBasicTimer()
    self.step = 0

    # Basic Window Panel Config
    # self.setGeometry(300,300,1280,720)
    self.resize(1280, 720)
    self.center()
    self.setWindowTitle('Cytokine Deuterium')
    self.setWindowIcon(QIcon('material/web.png'))

    self.show()


  def timerEvent(self, e):
    if self.step >= 100:
      self.timer.stop()
      self.btn2.setText('Finished')
      return
    self.step += 1
    self.pbar.setValue(self.step)

  
  def doAction(self):
    if self.timer.isActive():
      self.timer.stop()
      self.btn2.setText('Start')
    else:
      self.timer.start(100, self)
      self.btn2.setText('Stop')


  def changeValue(self, value):
    if value == 0:
      self.label.setPixmap(QPixmap('material/mute.png'))
    elif 0 < value <= 30:
      self.label.setPixmap(QPixmap('material/min.png'))
    elif 30 < value <= 80:
      self.label.setPixmap(QPixmap('material/med.png'))
    else:
      self.label.setPixmap(QPixmap('material/max.png'))


  def setColor(self, pressed):
    src = self.sender()
    if pressed:
      val = 255
    else:
      val = 0
    
    if src.text() == 'Red':
      self.col.setRed(val)
    elif src.text() == 'Green':
      self.col.setGreen(val)
    else:
      self.col.setBlue(val)
    
    self.square.setStyleSheet("QWidget {background-color: %s}" % self.col.name())


  def changeTitle(self, state):
    if state == Qt.Checked:
      self.setWindowTitle('QCheckBox')
    else:
      self.setWindowTitle('[NULL]')


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