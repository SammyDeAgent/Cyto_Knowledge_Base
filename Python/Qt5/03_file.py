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

class displayWindow(QMainWindow):

  def __init__(self):
    super().__init__()
    self.initUI()


  def initUI(self):

    # Dialog box Config - File Dialog
    self.text1 = QTextEdit()
    self.setCentralWidget(self.text1)
    self.statusBar()

    openFile = QAction(QIcon('material/open.png'),'Open', self)
    openFile.setShortcut('Ctrl+O')
    openFile.setStatusTip('Open a new file')
    openFile.triggered.connect(self.showDialog4)

    menubar = self.menuBar()
    fileMenu = menubar.addMenu('&File')
    fileMenu.addAction(openFile)

    # Basic Window Panel Config
    # self.setGeometry(300,300,1280,720)
    self.resize(1280, 720)
    self.center()
    self.setWindowTitle('Cytokine Deuterium')
    self.setWindowIcon(QIcon('material/web.png'))

    self.show()


  # Dialog Box - Font
  def showDialog3(self):
    font, ok = QFontDialog.getFont()
    if ok:
      self.lbl.setFont(font)


  # Dialog Box - File
  def showDialog4(self):
    home_dir = str(Path.home())
    fname = QFileDialog.getOpenFileName(self, 'Open File', home_dir)
    if fname[0]:
      f = open(fname[0], 'r')
      with f:
        data = f.read()
        self.text1.setText(data)


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