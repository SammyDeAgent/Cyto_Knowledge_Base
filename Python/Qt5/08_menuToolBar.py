from cgitb import text
from linecache import checkcache
import sys
from PyQt5.QtWidgets import (
  QApplication, QWidget, QToolTip, QPushButton, QMessageBox, QDesktopWidget, QMainWindow,
  QAction, qApp, QMenu, QTextEdit
)
from PyQt5.QtGui import (
  QIcon, QFont
)

class displayWindow(QMainWindow):

  def __init__(self):
    super().__init__()
    self.initUI()


  def initUI(self):
    
    # Statusbar
    self.statusbar = self.statusBar()
    self.statusbar.showMessage('Deuternium Engine v7.4.6')

    # Simple Menu
    exitAct = QAction(QIcon('material/exit.png'), '&Exit', self)
    exitAct.setShortcut('Ctrl+Q')
    exitAct.setStatusTip('Exit Application')
    exitAct.triggered.connect(qApp.quit)

    menubar = self.menuBar()
    fileMenu = menubar.addMenu('&File')
    fileMenu.addAction(exitAct)

    # Submenu
    impMenu = QMenu('Import',self)
    impAct = QAction('Import mail', self)
    impMenu.addAction(impAct)

    newAct = QAction('New', self)

    fileMenu.addAction(newAct)
    fileMenu.addMenu(impMenu)

    # Check Menu
    viewMenu = menubar.addMenu('View')

    viewStatAct = QAction('View statusbar', self, checkable=True)
    viewStatAct.setStatusTip('View statusbar')
    viewStatAct.setChecked(True)
    viewStatAct.triggered.connect(self.toggleMenu)

    viewMenu.addAction(viewStatAct)

    # Toolbar
    self.toolbar = self.addToolBar('Exit')
    self.toolbar.addAction(exitAct)

    # Main Window
    textEdit = QTextEdit()
    self.setCentralWidget(textEdit)

    # Basic Window Panel Config
    # self.setGeometry(300,300,1280,720)
    self.resize(1280, 720)
    self.center()
    self.setWindowTitle('Cytokine Deuterium')
    self.setWindowIcon(QIcon('material/web.png'))

    self.show()

  # Right-click on panel
  def contextMenuEvent(self, event):
    cmenu = QMenu(self)

    newAct = cmenu.addAction('New')
    openAct = cmenu.addAction('Open')
    quitAct = cmenu.addAction('Quit')
    action = cmenu.exec_(self.mapToGlobal(event.pos()))

    if action == quitAct:
      qApp.quit()


  def toggleMenu(self, state):
    if state:
      return self.statusbar.show()
    else:
      return self.statusbar.hide()


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