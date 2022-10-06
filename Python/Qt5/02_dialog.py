import sys
from PyQt5.QtWidgets import (
  QApplication, QWidget, QToolTip, QPushButton, QFrame,
  QMessageBox, QDesktopWidget, QInputDialog, QLineEdit,
  QColorDialog, QVBoxLayout, QSizePolicy, QFontDialog, QLabel,
  QMainWindow, QTextEdit, QAction, QFileDialog
)
from PyQt5.QtGui import (
  QIcon, QFont, QColor
)
from pathlib import Path

class displayWindow(QWidget):

  def __init__(self):
    super().__init__()
    self.initUI()


  def initUI(self):
    
    # Dialog box Config - Input Line
    btn1 = QPushButton('Dialog', self)
    btn1.move(100,150)
    btn1.clicked.connect(self.showDialog)

    self.le1 = QLineEdit(self)
    self.le1.move(100,100)

    # Dialog box Config - Value Selector
    col = QColor(0, 0, 0)

    btn2 = QPushButton('Color', self)
    btn2.move(100, 250)
    btn2.clicked.connect(self.showDialog2)

    frm = QFrame(self)
    frm.setStyleSheet("QWidget {background-color: %s}" % col.name())
    frm.setGeometry(800,0,600,720)

    # Dialog box Config - Font
    # vbox = QVBoxLayout()

    btn3 = QPushButton('Font', self)
    btn3.setSizePolicy(QSizePolicy.Fixed, QSizePolicy.Fixed)
    btn3.move(100, 450)

    # vbox.addWidget(btn3)

    btn3.clicked.connect(self.showDialog3)

    self.lbl = QLabel('The quick brown fox jumps over the lazy dog!', self)
    self.lbl.move(100,350)

    # vbox.addWidget(self.lbl)
    # self.setLayout(vbox)

    # Basic Window Panel Config
    # self.setGeometry(300,300,1280,720)
    self.resize(1280, 720)
    self.center()
    self.setWindowTitle('Cytokine Deuterium')
    self.setWindowIcon(QIcon('material/web.png'))

    self.show()


  # Dialog Box - Input Text
  def showDialog(self):
    text, ok = QInputDialog.getText(self, 'Input Dialog', 'Enter your name: ')
    if ok:
      self.le1.setText(str(text))

  
  # Dialog Box - Range Value
  def showDialog2(self):
    col = QColorDialog.getColor()
    if col.isValid():
      self.frm.setStyleSheet("QWidget {background-color: %s}" % col.name())


  # Dialog Box - Font
  def showDialog3(self):
    font, ok = QFontDialog.getFont()
    if ok:
      self.lbl.setFont(font)
      

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