var longer_MOS7Div = document.getElementById("longer_MaliciousOS7_Div");
var longer_MOS10Div = document.getElementById("longer_MaliciousOS10_Div");
var longer_MOS11Div = document.getElementById("longer_MaliciousOS11_Div");
var WinSxSNT_MOS8_1Div = document.getElementById("WinSxS-NT_MaliciousOS8_1_Div");
var WinSxSNT_MOS10Div = document.getElementById("WinSxS-NT_MaliciousOS10_Div");
var _360_MOS7Div = document.getElementById("_360_MaliciousOS7_Div");
var _360_MOS11Div = document.getElementById("_360_MaliciousOS11_Div");
var mougou666_MOSXPDiv = document.getElementById("mougou666_MaliciousOSXP_Div");
var HandaiGird_MOS12Div = document.getElementById("HandaiGird_MaliciousOS12_Div");
var Chengzhi_MOS10DolbyDiv = document.getElementById("Chengzhi_MaliciousOS10Dolby_Div");
var longer_SYSTEMBtn = document.getElementById("longer_SYSTEM_btn");
var WinSxSNT_SYSTEMBtn = document.getElementById("WinSxS-NT_SYSTEM_btn");
var _360_SYSTEMBtn = document.getElementById("_360_SYSTEM_btn");
var mougou666_SYSTEMBtn = document.getElementById("mougou666_SYSTEM_btn");
var HandaiGird_SYSTEMBtn = document.getElementById("HandaiGird_SYSTEM_btn");
var Chengzhi_SYSTEMBtn = document.getElementById("Chengzhi_SYSTEM_btn");

function toLongerToggleDiv() {
    longer_SYSTEMBtn.classList.add("selected");
    WinSxSNT_SYSTEMBtn.classList.remove("selected");
    _360_SYSTEMBtn.classList.remove("selected");
    mougou666_SYSTEMBtn.classList.remove("selected");
    HandaiGird_SYSTEMBtn.classList.remove("selected");
    Chengzhi_SYSTEMBtn.classList.remove("selected");
    longer_MOS7Div.style.display = "block";
    longer_MOS10Div.style.display = "block";
    longer_MOS11Div.style.display = "block";
    WinSxSNT_MOS8_1Div.style.display = "none";
    WinSxSNT_MOS10Div.style.display = "none";
    _360_MOS7Div.style.display = "none";
    _360_MOS11Div.style.display = "none";
    mougou666_MOSXPDiv.style.display = "none";
    HandaiGird_MOS12Div.style.display = "none";
    Chengzhi_MOS10DolbyDiv.style.display = "none";
}

function toWinSxSNTToggleDiv() {
    longer_SYSTEMBtn.classList.remove("selected");
    WinSxSNT_SYSTEMBtn.classList.add("selected");
    _360_SYSTEMBtn.classList.remove("selected");
    mougou666_SYSTEMBtn.classList.remove("selected");
    HandaiGird_SYSTEMBtn.classList.remove("selected");
    Chengzhi_SYSTEMBtn.classList.remove("selected");
    longer_MOS7Div.style.display = "none";
    longer_MOS10Div.style.display = "none";
    longer_MOS11Div.style.display = "none";
    WinSxSNT_MOS8_1Div.style.display = "block";
    WinSxSNT_MOS10Div.style.display = "block";
    _360_MOS7Div.style.display = "none";
    _360_MOS11Div.style.display = "none";
    mougou666_MOSXPDiv.style.display = "none";
    HandaiGird_MOS12Div.style.display = "none";
    Chengzhi_MOS10DolbyDiv.style.display = "none";
}

function to_360_ToggleDiv() {
    longer_SYSTEMBtn.classList.remove("selected");
    WinSxSNT_SYSTEMBtn.classList.remove("selected");
    _360_SYSTEMBtn.classList.add("selected");
    mougou666_SYSTEMBtn.classList.remove("selected");
    HandaiGird_SYSTEMBtn.classList.remove("selected");
    Chengzhi_SYSTEMBtn.classList.remove("selected");
    longer_MOS7Div.style.display = "none";
    longer_MOS10Div.style.display = "none";
    longer_MOS11Div.style.display = "none";
    WinSxSNT_MOS8_1Div.style.display = "none";
    WinSxSNT_MOS10Div.style.display = "none";
    _360_MOS7Div.style.display = "block";
    _360_MOS11Div.style.display = "block";
    mougou666_MOSXPDiv.style.display = "none";
    HandaiGird_MOS12Div.style.display = "none";
    Chengzhi_MOS10DolbyDiv.style.display = "none";
}

function to_mougou666_ToggleDiv() {
    longer_SYSTEMBtn.classList.remove("selected");
    WinSxSNT_SYSTEMBtn.classList.remove("selected");
    _360_SYSTEMBtn.classList.remove("selected");
    mougou666_SYSTEMBtn.classList.add("selected");
    HandaiGird_SYSTEMBtn.classList.remove("selected");
    Chengzhi_SYSTEMBtn.classList.remove("selected");
    longer_MOS7Div.style.display = "none";
    longer_MOS10Div.style.display = "none";
    longer_MOS11Div.style.display = "none";
    WinSxSNT_MOS8_1Div.style.display = "none";
    WinSxSNT_MOS10Div.style.display = "none";
    _360_MOS7Div.style.display = "none";
    _360_MOS11Div.style.display = "none";
    mougou666_MOSXPDiv.style.display = "block";
    HandaiGird_MOS12Div.style.display = "none";
    Chengzhi_MOS10DolbyDiv.style.display = "none";
}

function to_HandaiGird_ToggleDiv() {
    longer_SYSTEMBtn.classList.remove("selected");
    WinSxSNT_SYSTEMBtn.classList.remove("selected");
    _360_SYSTEMBtn.classList.remove("selected");
    mougou666_SYSTEMBtn.classList.remove("selected");
    HandaiGird_SYSTEMBtn.classList.add("selected");
    Chengzhi_SYSTEMBtn.classList.remove("selected");
    longer_MOS7Div.style.display = "none";
    longer_MOS10Div.style.display = "none";
    longer_MOS11Div.style.display = "none";
    WinSxSNT_MOS8_1Div.style.display = "none";
    WinSxSNT_MOS10Div.style.display = "none";
    _360_MOS7Div.style.display = "none";
    _360_MOS11Div.style.display = "none";
    mougou666_MOSXPDiv.style.display = "none";
    HandaiGird_MOS12Div.style.display = "block";
    Chengzhi_MOS10DolbyDiv.style.display = "none";
}

function to_Chengzhi_ToggleDiv() {
    longer_SYSTEMBtn.classList.remove("selected");
    WinSxSNT_SYSTEMBtn.classList.remove("selected");
    _360_SYSTEMBtn.classList.remove("selected");
    mougou666_SYSTEMBtn.classList.remove("selected");
    HandaiGird_SYSTEMBtn.classList.remove("selected");
    Chengzhi_SYSTEMBtn.classList.add("selected");
    longer_MOS7Div.style.display = "none";
    longer_MOS10Div.style.display = "none";
    longer_MOS11Div.style.display = "none";
    WinSxSNT_MOS8_1Div.style.display = "none";
    WinSxSNT_MOS10Div.style.display = "none";
    _360_MOS7Div.style.display = "none";
    _360_MOS11Div.style.display = "none";
    mougou666_MOSXPDiv.style.display = "none";
    HandaiGird_MOS12Div.style.display = "none";
    Chengzhi_MOS10DolbyDiv.style.display = "block";
}