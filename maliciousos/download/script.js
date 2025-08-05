var longer_MOS7Div = document.getElementById("longer_MaliciousOS7_Div");
var longer_MOS10Div = document.getElementById("longer_MaliciousOS10_Div");
var longer_MOS11Div = document.getElementById("longer_MaliciousOS11_Div");
var WinSxSNT_MOS8_1Div = document.getElementById("WinSxS-NT_MaliciousOS8_1_Div");
var WinSxSNT_MOS10Div = document.getElementById("WinSxS-NT_MaliciousOS10_Div");
var WinSxSNT_MOS11Div = document.getElementById("WinSxS-NT_MaliciousOS11_Div");
var _360_MOS7Div = document.getElementById("_360_MaliciousOS7_Div");
var _360_MOS11Div = document.getElementById("_360_MaliciousOS11_Div");
var longer_SYSTEMBtn = document.getElementById("longer_SYSTEM_btn");
var WinSxSNT_SYSTEMBtn = document.getElementById("WinSxS-NT_SYSTEM_btn");
var _360_SYSTEMBtn = document.getElementById("_360_SYSTEM_btn");
function toLongerToggleDiv() {
    longer_SYSTEMBtn.classList.add("selected");
    WinSxSNT_SYSTEMBtn.classList.remove("selected");
    _360_SYSTEMBtn.classList.remove("selected");
    longer_MOS7Div.style.display = "block";
    longer_MOS10Div.style.display = "block";
    longer_MOS11Div.style.display = "block";
    WinSxSNT_MOS8_1Div.style.display = "none";
    WinSxSNT_MOS10Div.style.display = "none";
    WinSxSNT_MOS11Div.style.display = "none";
    _360_MOS7Div.style.display = "none";
    _360_MOS11Div.style.display = "none";
}

function toWinSxSNTToggleDiv() {
    longer_SYSTEMBtn.classList.remove("selected");
    WinSxSNT_SYSTEMBtn.classList.add("selected");
    _360_SYSTEMBtn.classList.remove("selected");
    longer_MOS7Div.style.display = "none";
    longer_MOS10Div.style.display = "none";
    longer_MOS11Div.style.display = "none";
    WinSxSNT_MOS8_1Div.style.display = "block";
    WinSxSNT_MOS10Div.style.display = "block";
    WinSxSNT_MOS11Div.style.display = "block";
    _360_MOS7Div.style.display = "none";
    _360_MOS11Div.style.display = "none";
}

function to_360_ToggleDiv() {
    longer_SYSTEMBtn.classList.remove("selected");
    WinSxSNT_SYSTEMBtn.classList.remove("selected");
    _360_SYSTEMBtn.classList.add("selected");
    longer_MOS7Div.style.display = "none";
    longer_MOS10Div.style.display = "none";
    longer_MOS11Div.style.display = "none";
    WinSxSNT_MOS8_1Div.style.display = "none";
    WinSxSNT_MOS10Div.style.display = "none";
    WinSxSNT_MOS11Div.style.display = "none";
    _360_MOS7Div.style.display = "block";
    _360_MOS11Div.style.display = "block";
}