//Spam control function
console.log("Task 3: Profiler function");
const profile = {
  username: "Jacob",
  playTime: 300,
  changeUsername(newusername) {
    this.username = newusername;
  },
  updatePlayTime(hours) {
    this.playTime += hours;
  },
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  }
};

//Tests
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
