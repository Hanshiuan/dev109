function addItem() {
  var input = document.getElementById('itemInput');
  var list = document.getElementById('todo');
  var resultMsg = document.getElementById('scriptResults');
  var newItem = input.value.trim();

  try {
    if (!newItem) {
      throw new Error("Input is empty.");
    }

    var li = document.createElement('li');
    li.textContent = newItem;
    li.className = 'cool'; // Default class

    list.appendChild(li);

    // Clear Input Box
    input.value = '';
  } catch (e) {
    // Show error in console
    console.log(e);
  } finally {
    if (!newItem) {
      // Show error but don't add
      resultMsg.textContent = "Please enter a grocery item before adding.";
      return; //Terminal function
    } else {
      resultMsg.textContent = ""; // Clear Error
    }
  }
}
