// In JavaScript, we can use any expression in conditionals, &&, || and (!).

function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }

  return "Nobody's here. :(";
}

console.log(getUsersOnlineMessage(0));

console.log(getUsersOnlineMessage(1));
