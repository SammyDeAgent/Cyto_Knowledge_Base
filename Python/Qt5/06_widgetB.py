from doctest import master
import sys
from PyQt5.QtWidgets import (
  QApplication, QWidget, QToolTip, QPushButton, QMessageBox, QDesktopWidget, QHBoxLayout, QLabel,
  QLineEdit, QSplitter, QFrame, QVBoxLayout, QComboBox
)
from PyQt5.QtGui import (
  QIcon, QFont, QPixmap
)
from PyQt5.QtCore import Qt

class displayWindow(QWidget):

  def __init__(self):
    super().__init__()
    self.initUI()


  def initUI(self):
    
    # Pixmap - Optimized Images
    hbox = QHBoxLayout()
    pixmap = QPixmap('material/phat_demo.jpg')

    self.lbl = QLabel()
    self.lbl.setPixmap(pixmap)   

    # QLineEdit
    self.lbl2 = QLabel()
    qle = QLineEdit()

    vbox_lbl = QVBoxLayout()
    vbox_lbl.addWidget(self.lbl2)
    vbox_lbl.addWidget(qle)
    

    qle.textChanged[str].connect(self.onChanged)

    # qle.move(60, 100)
    # self.lbl2.move(60,40)
    hbox.addWidget(self.lbl)
    hbox.addLayout(vbox_lbl)

    # QSplitter
    hbox2 = QHBoxLayout()

    topleft= QFrame(self)
    topleft.setFrameShape(QFrame.StyledPanel)
    topright= QFrame(self)
    topright.setFrameShape(QFrame.StyledPanel)
    bottom= QFrame(self)
    bottom.setFrameShape(QFrame.StyledPanel)

    splitter1 = QSplitter(Qt.Horizontal)
    splitter1.addWidget(topleft)
    splitter1.addWidget(topright)

    splitter2 = QSplitter(Qt.Vertical)
    splitter2.addWidget(splitter1)
    splitter2.addWidget(bottom)

    hbox2.addWidget(splitter2)

    # Combo Box
    hbox3 = QHBoxLayout()
    self.lbl2 = QLabel('Ubuntu')

    combo = QComboBox()
    i = 0
    list = ['Ubuntu', 'Madriva', 'Fedora', 'Arch', 'Gentoo']
    while i < 5:
      combo.addItem(list[i])
      i+=1
    hbox3.addWidget(self.lbl2)
    hbox3.addWidget(combo)

    combo.activated[str].connect(self.onActivated)

    # All in one
    vbox = QVBoxLayout()
    vbox.addLayout(hbox)
    vbox.addLayout(hbox2)
    vbox.addLayout(hbox3)
    self.setLayout(vbox)

    # Basic Window Panel Config
    # self.setGeometry(300,300,1280,720)
    self.resize(1280, 720)
    self.center()
    self.setWindowTitle('Cytokine Deuterium')
    self.setWindowIcon(QIcon('material/web.png'))

    self.show()


  def onActivated(self, text):
    self.lbl2.setText(text)
    self.lbl2.adjustSize()


  def onChanged(self, text):
    self.lbl2.setText(text)
    self.lbl2.adjustSize()


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