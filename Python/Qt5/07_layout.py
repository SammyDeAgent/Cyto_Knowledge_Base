import sys
from PyQt5.QtWidgets import (
  QApplication, QWidget, QToolTip, QPushButton, QMessageBox, QDesktopWidget,
  QLabel, QVBoxLayout, QHBoxLayout, QGridLayout, QLineEdit, QTextEdit
)
from PyQt5.QtGui import (
  QIcon, QFont
)

class displayWindow(QWidget):

  def __init__(self):
    super().__init__()
    self.initUI()


  def initUI(self):
    
    # Same as JavaFX styled layout
    # Absolute positioning - with precise coordinates of the panel
    # Coordinates start from top left (0,0):
    # X -> Increases via Left to Right
    # Y v Increases via Top to Botton
    lbl1 = QLabel('Code', self)
    lbl1.move(15,10)

    # HBox and VBox - H for horizontal, and V for Vertical
    hbox1 = QHBoxLayout()
    btn1 = QPushButton("Refresh")
    btn2  = QPushButton("Exit")

    hbox1.addWidget(btn1)
    hbox1.addStretch(1)
    hbox1.addWidget(btn2)

    # Grid - an universal layout class
    grid = QGridLayout()
    names = [
      'Cls','Bck','','Close',
      '7','8','9','/',
      '4','5','6','*',
      '1','2','3','-',
      '0','.','=','+'
    ]
    pos = [(i, j) for i in range(5) for j in range(4)]

    for pos2, name in zip(pos, names):
      if name == '':
        continue
      button = QPushButton(name)
      grid.addWidget(button, *pos2)
    
    # Reviews
    title = QLabel('Title')
    author = QLabel('Author')
    review = QLabel('Review')

    titleEdit = QLineEdit()
    authorEdit = QLineEdit()
    reviewEdit = QTextEdit()

    grid2 = QGridLayout()
    grid2.setSpacing(10)

    grid2.addWidget(title, 1,0)
    grid2.addWidget(titleEdit, 1,1)
    grid2.addWidget(author, 2,0)
    grid2.addWidget(authorEdit, 2,1)
    grid2.addWidget(review, 3,0)
    grid2.addWidget(reviewEdit, 3,1,5,1)
    

    # Master Panel
    master = QVBoxLayout()
    master.addLayout(hbox1)
    master.addLayout(grid)
    master.addLayout(grid2)
    self.setLayout(master)
    
    # Basic Window Panel Config
    # self.setGeometry(300,300,1280,720)
    self.resize(1280, 1200)
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