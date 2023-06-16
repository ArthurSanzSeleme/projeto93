// links firebase//
const firebaseConfig = {
  apiKey: "AIzaSyAgAMzU_v5mMgepnlnDqD5NJiyR1ebZYYc",
  authDomain: "projeto93-396b1.firebaseapp.com",
  databaseURL: "https://projeto93-396b1-default-rtdb.firebaseio.com",
  projectId: "projeto93-396b1",
  storageBucket: "projeto93-396b1.appspot.com",
  messagingSenderId: "993937674322",
  appId: "1:993937674322:web:fd635ba4845c73e4a84f8b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "Kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}

