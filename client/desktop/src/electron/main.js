process.env.NODE_ENV = process.env.NODE_ENV || 'production';
console.log(`Electron launching with NODE_ENV: ${process.env.NODE_ENV}`);


const electron = require('electron');
const app = electron.app;
const Menu = electron.Menu;
const shell = electron.shell;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let menu;
let template;
let appTitle = `GeoService`;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  if (process.platform === 'darwin') {
    buildDarwinMenus();
  } else {
    buildMenus();
  }
  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

function buildDarwinMenus() {
  template = [{
    label: appTitle,
    submenu: [{
      label: `About ${appTitle}`,
      selector: 'orderFrontStandardAboutPanel:'
    }, {
      type: 'separator'
    }, {
      label: 'Services',
      submenu: []
    }, {
      type: 'separator'
    }, {
      label: 'Hide Geo Service',
      accelerator: 'Command+H',
      selector: 'hide:'
    }, {
      label: 'Hide Others',
      accelerator: 'Command+Shift+H',
      selector: 'hideOtherApplications:'
    }, {
      label: 'Show All',
      selector: 'unhideAllApplications:'
    }, {
      type: 'separator'
    }, {
      label: 'Quit',
      accelerator: 'Command+Q',
      click() {
        app.quit();
      }
    }]
  }, {
    label: 'Edit',
    submenu: [{
      label: 'Undo',
      accelerator: 'Command+Z',
      selector: 'undo:'
    }, {
      label: 'Redo',
      accelerator: 'Shift+Command+Z',
      selector: 'redo:'
    }, {
      type: 'separator'
    }, {
      label: 'Cut',
      accelerator: 'Command+X',
      selector: 'cut:'
    }, {
      label: 'Copy',
      accelerator: 'Command+C',
      selector: 'copy:'
    }, {
      label: 'Paste',
      accelerator: 'Command+V',
      selector: 'paste:'
    }, {
      label: 'Select All',
      accelerator: 'Command+A',
      selector: 'selectAll:'
    }]
  }, {
    label: 'View',
    submenu: (process.env.NODE_ENV === 'development') ? [{
      label: 'Reload',
      accelerator: 'Command+R',
      click() {
        mainWindow.reload();
      }
    }, {
      label: 'Toggle Full Screen',
      accelerator: 'Ctrl+Command+F',
      click() {
        mainWindow.setFullScreen(!mainWindow.isFullScreen());
      }
    }, {
      label: 'Toggle Developer Tools',
      accelerator: 'Alt+Command+I',
      click() {
        mainWindow.toggleDevTools();
      }
    }] : [{
      label: 'Toggle Full Screen',
      accelerator: 'Ctrl+Command+F',
      click() {
        mainWindow.setFullScreen(!mainWindow.isFullScreen());
      }
    }]
  }, {
    label: 'Window',
    submenu: [{
      label: 'Minimize',
      accelerator: 'Command+M',
      selector: 'performMiniaturize:'
    }, {
      label: 'Close',
      accelerator: 'Command+W',
      selector: 'performClose:'
    }, {
      type: 'separator'
    }, {
      label: 'Bring All to Front',
      selector: 'arrangeInFront:'
    }]
  }];

  menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

function buildMenus() {
  require('./menu');
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
function handleSquirrelEvent(application) {
  if (process.argv.length === 1) {
    return false;
  }

  const ChildProcess = require('child_process');
  const path = require('path');

  const appFolder = path.resolve(process.execPath, '..');
  const rootAtomFolder = path.resolve(appFolder, '..');
  const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
  const exeName = path.basename(process.execPath);

  const spawn = function (command, args) {
    let spawnedProcess, error;

    try {
      spawnedProcess = ChildProcess.spawn(command, args, {
        detached: true
      });
    } catch (error) {}

    return spawnedProcess;
  };

  const spawnUpdate = function (args) {
    return spawn(updateDotExe, args);
  };

  const squirrelEvent = process.argv[1];
  switch (squirrelEvent) {
    case '--squirrel-install':
    case '--squirrel-updated':
      // Optionally do things such as:
      // - Add your .exe to the PATH
      // - Write to the registry for things like file associations and
      //   explorer context menus

      // Install desktop and start menu shortcuts
      spawnUpdate(['--createShortcut', exeName]);

      setTimeout(application.quit, 1000);
      return true;

    case '--squirrel-uninstall':
      // Undo anything you did in the --squirrel-install and
      // --squirrel-updated handlers

      // Remove desktop and start menu shortcuts
      spawnUpdate(['--removeShortcut', exeName]);

      setTimeout(application.quit, 1000);
      return true;

    case '--squirrel-obsolete':
      // This is called on the outgoing version of your app before
      // we update to the new version - it's the opposite of
      // --squirrel-updated

      application.quit();
      return true;
  }
}
