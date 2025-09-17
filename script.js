// Languages
const translations = {
  en: {
    loginTitle: "Smart Fence Security",
    liveData: "🔌 Live Sensor Data",
    features: "🛡️ Security Features",
    alerts: "🚨 Alerts & Notifications",
    cctv: "📷 CCTV Capture",
    voltage: "Voltage",
    current: "Current",
    featuresList: [
      "Voltage & Current Sensors monitor fences with microcontrollers & switching modules.",
      "Automatic cutoff via relays during voltage drop or overload.",
      "Tamper-Proof Design: Hidden GSM/LoRa/Wi-Fi alerts to owner/police.",
      "Line Break Detector shuts down system & sends alert.",
      "Ground Fault Detector triggers alert if fence is excessively grounded.",
      "Main Board Theft Protection: Alerts & relay shutdown on tampering.",
      "CCTV integration captures intruder image and sends to user.",
      "RFID Authorization ensures safe farm entry for authorized users."
    ]
  },
  ta: {
    loginTitle: "ஸ்மார்ட் வேலி பாதுகாப்பு",
    liveData: "🔌 நேரடி சென்சார் தரவு",
    features: "🛡️ பாதுகாப்பு அம்சங்கள்",
    alerts: "🚨 எச்சரிக்கை & அறிவிப்புகள்",
    cctv: "📷 சிசிடிவி படம்",
    voltage: "மின்னழுத்தம்",
    current: "மின்னோட்டம்",
    featuresList: [
      "மின்னழுத்த & மின்னோட்ட சென்சார்கள் மைக்ரோகண்ட்ரோலர் மூலம் கண்காணிக்கப்படும்.",
      "மின்னழுத்த குறையும்போது அல்லது ஓவர்லோடு ஆகும்போது தானியங்கி ரிலே துண்டிப்பு.",
      "மறைவு GSM/LoRa/Wi-Fi எச்சரிக்கை உரிமையாளர்/போலீசுக்கு.",
      "கம்பி அறுந்தால் சிஸ்டம் நிறுத்தம் & எச்சரிக்கை.",
      "மின்னோட்டம் தரையில் கசிந்தால் எச்சரிக்கை.",
      "மெயின் போர்டு திருட்டு பாதுகாப்பு.",
      "சிசிடிவி மூலம் புகைப்படம் பிடித்து பயனருக்கு அனுப்பும்.",
      "RFID மூலம் அனுமதி வழங்கப்படும்."
    ]
  },
  te: {
    loginTitle: "స్మార్ట్ ఫెన్స్ భద్రత",
    liveData: "🔌 ప్రత్యక్ష సెన్సార్ డేటా",
    features: "🛡️ భద్రతా లక్షణాలు",
    alerts: "🚨 హెచ్చరికలు & నోటిఫికేషన్లు",
    cctv: "📷 సీసీటీవీ చిత్రాలు",
    voltage: "వోల్టేజ్",
    current: "కరెంట్",
    featuresList: [
      "వోల్టేజ్ & కరెంట్ సెన్సార్‌లు మైక్రోకంట్రోలర్‌తో మానిటరింగ్.",
      "వోల్టేజ్ తగ్గినప్పుడు లేదా ఓవర్లోడ్ అయితే ఆటో రీలే కట్.",
      "టాంపర్ ప్రూఫ్ డిజైన్: GSM/LoRa/Wi-Fi ద్వారా అలర్ట్.",
      "వైర్ కట్ అయితే సిస్టమ్ షట్‌డౌన్ & అలర్ట్.",
      "గ్రౌండ్ ఫాల్ట్ డిటెక్షన్ అలర్ట్.",
      "మెయిన్ బోర్డ్ దొంగతనం రక్షణ.",
      "సీసీటీవీ చిత్రాలను యూజర్‌కు పంపిస్తుంది.",
      "RFID అనుమతి కల్పిస్తుంది."
    ]
  },
  kn: {
    loginTitle: "ಸ್ಮಾರ್ಟ್ ಫೆನ್ಸ್ ಭದ್ರತೆ",
    liveData: "🔌 ಲೈವ್ ಸೆನ್ಸಾರ್ ಡೇಟಾ",
    features: "🛡️ ಭದ್ರತಾ ವೈಶಿಷ್ಟ್ಯಗಳು",
    alerts: "🚨 ಎಚ್ಚರಿಕೆಗಳು & ಅಧಿಸೂಚನೆಗಳು",
    cctv: "📷 ಸಿಸಿಟಿವಿ ಚಿತ್ರ",
    voltage: "ವೋಲ್ಟೇಜ್",
    current: "ಕರಂಟ್",
    featuresList: [
      "ವೋಲ್ಟೇಜ್ & ಕರಂಟ್ ಸೆನ್ಸಾರ್‌ಗಳು ಮೈಕ್ರೋಕಂಟ್ರೋಲರ್‌ನೊಂದಿಗೆ ಮಾನಿಟರ್.",
      "ವೋಲ್ಟೇಜ್ ಕುಸಿದಾಗ ಅಥವಾ ಓವರ್‌ಲೋಡ್‌ನಲ್ಲಿ ರಿಲೇ ಕಡಿತ.",
      "ಟ್ಯಾಂಪರ್ ಪ್ರೂಫ್ GSM/LoRa/Wi-Fi ಅಲರ್ಟ್.",
      "ವೈರ್ ಕಟ್ ಆದಾಗ ಸಿಸ್ಟಮ್ ಶಟ್ಡೌನ್ & ಎಚ್ಚರಿಕೆ.",
      "ಗ್ರೌಂಡ್ ಫಾಲ್ಟ್ ಡಿಟೆಕ್ಷನ್ ಅಲರ್ಟ್.",
      "ಮೇನ್ ಬೋರ್ಡ್ ದರೋಡೆ ರಕ್ಷಣೆ.",
      "ಸಿಸಿಟಿವಿ ಚಿತ್ರವನ್ನು ಬಳಕೆದಾರನಿಗೆ ಕಳುಹಿಸುತ್ತದೆ.",
      "RFID ಅನುಮತಿ."
    ]
  },
  ml: {
    loginTitle: "സ്മാർട്ട് വേലി സുരക്ഷ",
    liveData: "🔌 തത്സമയ സെൻസർ ഡാറ്റ",
    features: "🛡️ സുരക്ഷാ സവിശേഷതകൾ",
    alerts: "🚨 മുന്നറിയിപ്പുകളും അറിയിപ്പുകളും",
    cctv: "📷 സിസിടിവി ചിത്രം",
    voltage: "വോൾട്ടേജ്",
    current: "കരന്റ്",
    featuresList: [
      "വോൾട്ടേജ് & കറന്റ് സെൻസറുകൾ മൈക്രോ കണ്ട്രോളർ വഴി.",
      "വോൾട്ടേജ് കുറയുമ്പോൾ അല്ലെങ്കിൽ ഓവർലോഡ് ഉണ്ടായാൽ റീലേ കട്ട്.",
      "ടാമ്പർ പ്രൂഫ് GSM/LoRa/Wi-Fi അലർട്ട്.",
      "വയർ മുറിഞ്ഞാൽ സിസ്റ്റം ഷട്ട് ഡൗൺ & അലർട്ട്.",
      "ഗ്രൗണ്ട് ഫാൾട്ട് ഡിറ്റക്ഷൻ അലർട്ട്.",
      "മെയിൻ ബോർഡ് മോഷണ സംരക്ഷണം.",
      "സിസിടിവി ചിത്രം ഉപഭോക്താവിന് അയക്കും.",
      "RFID വഴി പ്രവേശനം."
    ]
  }
};

// Apply Language
function setLanguage(lang) {
  document.getElementById("login-title").textContent = translations[lang].loginTitle;
  document.getElementById("live-data-title").textContent = translations[lang].liveData;
  document.getElementById("features-title").textContent = translations[lang].features;
  document.getElementById("alerts-title").textContent = translations[lang].alerts;
  document.getElementById("cctv-title").textContent = translations[lang].cctv;
  document.getElementById("voltage-label").childNodes[0].textContent = translations[lang].voltage + ": ";
  document.getElementById("current-label").childNodes[0].textContent = translations[lang].current + ": ";

  let list = document.getElementById("features-list");
  list.innerHTML = "";
  translations[lang].featuresList.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  document.getElementById("language-menu").style.display = "none";
}

// Burger Menu
function toggleMenu() {
  let menu = document.getElementById("language-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Theme Toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Dummy Login
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const error = document.getElementById("login-error");

  if (user === "admin" && pass === "1234") {
    document.getElementById("login-page").classList.remove("active");
    document.getElementById("dashboard-page").classList.add("active");
    setLanguage("en"); // default English
    startSimulation();
  } else {
    error.textContent = "Invalid Username or Password!";
  }
}

function logout() {
  document.getElementById("dashboard-page").classList.remove("active");
  document.getElementById("login-page").classList.add("active");
}

// Live Simulation
function startSimulation() {
  setInterval(() => {
    let voltage = (200 + Math.random() * 20).toFixed(2);
    let current = (2 + Math.random() * 0.5).toFixed(2);

    document.getElementById("voltage").textContent = voltage;
    document.getElementById("current").textContent = current;

    document.getElementById("voltage-bar").style.width = ((voltage / 240) * 100) + "%";
    document.getElementById("current-bar").style.width = ((current / 5) * 100) + "%";

    if (voltage < 205 || current > 2.4) {
      document.getElementById("alert-box").textContent = "⚠️ Warning: Abnormal Activity Detected!";
    } else {
      document.getElementById("alert-box").textContent = "No alerts currently.";
    }
  }, 2000);
}
