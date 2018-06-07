// git add .
// git commit -m 'update'
// git checkout master
// git pull origin master
// git merge aven
// git push

// const process = require('process');

(() => {
  const command = [
    'git add .',
    "git commit -m 'update'",
    'git checkout master',
    'git pull origin master',
    'git merge aven',
    'git push'
  ]
  command.forEach(val => {
    console.log(val)
  })
  // process.exit()
})()
