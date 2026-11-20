(() => {
  const $ = (id) => document.getElementById(id);
  const STORAGE_KEY = "sakhiledger.entries.v1";
  const translations = {
    en: {tagline:"Your business, understood.",language:"Language",overview:"BUSINESS OVERVIEW",hello:"Namaste, business owner 🌼",welcomeText:"A clearer picture of your business starts with one small entry.",hearSummary:"Hear summary",sales:"Sales",salesHint:"Money earned from sales",expenses:"Expenses",expensesHint:"Money spent",net:"Net after expenses",netHint:"Sales minus expenses",dues:"Customer dues",duesHint:"Still to be collected",quickEntry:"QUICK ENTRY",addRecord:"Add a record",recordType:"What happened?",saleOption:"Sale received",expenseOption:"Business expense",udhaarOption:"Sold on credit (udhaar)",repaymentOption:"Udhaar repayment received",amount:"Amount (₹)",date:"Date",customer:"Customer / person (optional)",personPlaceholder:"e.g. Meena",note:"What was it for? (optional)",notePlaceholder:"e.g. 2 dresses, cotton purchase",saveEntry:"Save entry",businessPulse:"BUSINESS PULSE",insights:"What your numbers say",emptyInsight:"Add a few entries to see simple business insights here.",privacy:"Your entries stay in this browser on this device. They are not sent to a server.",recentActivity:"RECENT ACTIVITY",yourRecords:"Your records",clearAll:"Clear all",tableDate:"Date",tableType:"Type",tableDetails:"Details",tableAmount:"Amount",emptyRecords:"No entries yet. Your first entry can go here.",demoData:"Load sample demo data",demoNote:"Sample entries are clearly labelled and can be cleared.",footer:"A simple business companion. Early prototype.",saved:"Entry saved.",invalid:"Please enter a valid amount and date.",confirmClear:"Delete all saved entries from this browser?",nothingToClear:"There are no entries to clear.",clearDone:"All entries cleared.",saleLabel:"Sale",expenseLabel:"Expense",udhaarLabel:"Udhaar",repaymentLabel:"Repayment",noName:"Business entry",demoTag:"DEMO",demoLoaded:"Sample demo entries added.",voiceUnsupported:"Voice input is not supported in this browser. Try Chrome.",voiceListening:"Listening… speak now.",voiceDone:"Voice note added.",voiceError:"Could not capture speech. You can type instead.",summaryEmpty:"There are no entries yet. Add a sale or expense to get started.",summaryText:"Your sales are {sales} rupees, expenses are {expenses} rupees, net after expenses is {net} rupees, and customer dues are {dues} rupees.",insightNoData:"Add sales, expenses or udhaar to begin seeing patterns.",insightProfit:"Your recorded sales are higher than expenses by {amount}.",insightLoss:"Your recorded expenses are higher than sales by {amount}. Review costs and pricing.",insightDues:"You have {amount} in customer dues. A gentle follow-up may help.",insightNoDues:"There are no outstanding customer dues in the entries recorded.",insightSales:"You have recorded {count} sale-related entries.",insightExpense:"You have recorded {count} expense entries.",deleted:"Entry deleted."},
    hi: {tagline:"आपका कारोबार, अब समझना आसान।",language:"भाषा",overview:"कारोबार की झलक",hello:"नमस्ते, व्यवसायी 🌼",welcomeText:"कारोबार की साफ तस्वीर एक छोटी एंट्री से शुरू होती है।",hearSummary:"सारांश सुनें",sales:"बिक्री",salesHint:"बिक्री से मिली रकम",expenses:"खर्च",expensesHint:"खर्च हुई रकम",net:"खर्च के बाद बचत",netHint:"बिक्री में से खर्च घटाकर",dues:"ग्राहकों से लेना है",duesHint:"अभी वसूलना बाकी",quickEntry:"जल्दी एंट्री",addRecord:"नई एंट्री जोड़ें",recordType:"क्या हुआ?",saleOption:"बिक्री की रकम मिली",expenseOption:"व्यापार का खर्च",udhaarOption:"उधार पर सामान बेचा",repaymentOption:"उधार की रकम मिली",amount:"रकम (₹)",date:"तारीख",customer:"ग्राहक / व्यक्ति (ज़रूरी नहीं)",personPlaceholder:"जैसे मीना",note:"किसलिए था? (ज़रूरी नहीं)",notePlaceholder:"जैसे 2 कपड़े, कपास खरीदा",saveEntry:"एंट्री सेव करें",businessPulse:"कारोबार की स्थिति",insights:"आपके आंकड़े क्या बताते हैं",emptyInsight:"कुछ एंट्री जोड़ें, फिर यहाँ आसान जानकारी दिखेगी।",privacy:"आपकी एंट्री इसी डिवाइस के इस ब्राउज़र में रहती हैं। सर्वर पर नहीं भेजी जातीं।",recentActivity:"हाल की गतिविधि",yourRecords:"आपकी एंट्री",clearAll:"सब हटाएँ",tableDate:"तारीख",tableType:"प्रकार",tableDetails:"जानकारी",tableAmount:"रकम",emptyRecords:"अभी कोई एंट्री नहीं है। पहली एंट्री यहाँ जोड़ें।",demoData:"उदाहरण डेटा देखें",demoNote:"उदाहरण एंट्री पर DEMO लिखा है। इन्हें हटाया जा सकता है।",footer:"आपके कारोबार का आसान साथी। शुरुआती प्रोटोटाइप।",saved:"एंट्री सेव हो गई।",invalid:"कृपया सही रकम और तारीख डालें।",confirmClear:"क्या इस ब्राउज़र से सभी सेव की गई एंट्री हटानी हैं?",nothingToClear:"हटाने के लिए कोई एंट्री नहीं है।",clearDone:"सभी एंट्री हटा दी गईं।",saleLabel:"बिक्री",expenseLabel:"खर्च",udhaarLabel:"उधार",repaymentLabel:"वापसी",noName:"कारोबार की एंट्री",demoTag:"डेमो",demoLoaded:"उदाहरण एंट्री जोड़ दी गईं।",voiceUnsupported:"इस ब्राउज़र में आवाज़ से लिखना उपलब्ध नहीं है। Chrome आज़माएँ।",voiceListening:"सुन रहे हैं… अब बोलें।",voiceDone:"आवाज़ से नोट जुड़ गया।",voiceError:"आवाज़ समझ नहीं आई। आप टाइप कर सकती हैं।",summaryEmpty:"अभी कोई एंट्री नहीं है। शुरुआत के लिए बिक्री या खर्च जोड़ें।",summaryText:"आपकी बिक्री {sales} रुपये, खर्च {expenses} रुपये, खर्च के बाद बचत {net} रुपये और ग्राहकों से लेना {dues} रुपये है।",insightNoData:"जानकारी देखने के लिए बिक्री, खर्च या उधार जोड़ें।",insightProfit:"दर्ज बिक्री, खर्च से {amount} अधिक है।",insightLoss:"दर्ज खर्च, बिक्री से {amount} अधिक है। खर्च और कीमत देखें।",insightDues:"ग्राहकों से {amount} रुपये लेने बाकी हैं। विनम्रता से याद दिलाएँ।",insightNoDues:"दर्ज एंट्री के अनुसार कोई बकाया उधार नहीं है।",insightSales:"आपने बिक्री से जुड़ी {count} एंट्री दर्ज की हैं।",insightExpense:"आपने {count} खर्च की एंट्री दर्ज की हैं।",deleted:"एंट्री हटा दी गई।"},
    gu: {tagline:"તમારો વ્યવસાય, હવે સમજવો સરળ.",language:"ભાષા",overview:"વ્યવસાયની ઝલક",hello:"નમસ્તે, વ્યવસાયી 🌼",welcomeText:"વ્યવસાયની સ્પષ્ટ સમજ એક નાની નોંધથી શરૂ થાય છે.",hearSummary:"સારાંશ સાંભળો",sales:"વેચાણ",salesHint:"વેચાણથી મળેલી રકમ",expenses:"ખર્ચ",expensesHint:"ખર્ચ થયેલી રકમ",net:"ખર્ચ પછી બાકી",netHint:"વેચાણમાંથી ખર્ચ બાદ",dues:"ગ્રાહકો પાસેથી લેવાના",duesHint:"હજુ વસૂલવાના બાકી",quickEntry:"ઝડપી નોંધ",addRecord:"નવી નોંધ ઉમેરો",recordType:"શું થયું?",saleOption:"વેચાણની રકમ મળી",expenseOption:"વ્યવસાયનો ખર્ચ",udhaarOption:"ઉધાર પર વેચાણ",repaymentOption:"ઉધારની રકમ મળી",amount:"રકમ (₹)",date:"તારીખ",customer:"ગ્રાહક / વ્યક્તિ (વૈકલ્પિક)",personPlaceholder:"દા.ત. મીના",note:"શા માટે હતું? (વૈકલ્પિક)",notePlaceholder:"દા.ત. 2 ડ્રેસ, કાપડ ખરીદી",saveEntry:"નોંધ સાચવો",businessPulse:"વ્યવસાયની સ્થિતિ",insights:"તમારા આંકડા શું કહે છે",emptyInsight:"થોડી નોંધો ઉમેરો, પછી અહીં સરળ માહિતી દેખાશે.",privacy:"તમારી નોંધો આ ઉપકરણના આ બ્રાઉઝરમાં જ રહે છે. સર્વર પર મોકલાતી નથી.",recentActivity:"તાજેતરની પ્રવૃત્તિ",yourRecords:"તમારી નોંધો",clearAll:"બધી દૂર કરો",tableDate:"તારીખ",tableType:"પ્રકાર",tableDetails:"વિગતો",tableAmount:"રકમ",emptyRecords:"હજુ કોઈ નોંધ નથી. તમારી પહેલી નોંધ અહીં ઉમેરો.",demoData:"નમૂનાનો ડેટા ઉમેરો",demoNote:"નમૂનાની નોંધો પર DEMO લખેલું છે. તેને દૂર કરી શકાય છે.",footer:"તમારા વ્યવસાયનો સરળ સાથી. પ્રારંભિક પ્રોટોટાઇપ.",saved:"નોંધ સાચવાઈ.",invalid:"કૃપા કરીને યોગ્ય રકમ અને તારીખ દાખલ કરો.",confirmClear:"શું આ બ્રાઉઝરમાંથી બધી સાચવેલી નોંધો કાઢી નાખવી છે?",nothingToClear:"કાઢવા માટે કોઈ નોંધ નથી.",clearDone:"બધી નોંધો દૂર થઈ.",saleLabel:"વેચાણ",expenseLabel:"ખર્ચ",udhaarLabel:"ઉધાર",repaymentLabel:"ચુકવણી",noName:"વ્યવસાયની નોંધ",demoTag:"ડેમો",demoLoaded:"નમૂનાની નોંધો ઉમેરાઈ.",voiceUnsupported:"આ બ્રાઉઝરમાં અવાજથી લખવાની સુવિધા નથી. Chrome અજમાવો.",voiceListening:"સાંભળી રહ્યા છીએ… બોલો.",voiceDone:"અવાજની નોંધ ઉમેરાઈ.",voiceError:"અવાજ સમજી શકાયો નથી. તમે ટાઇપ કરી શકો છો.",summaryEmpty:"હજુ કોઈ નોંધ નથી. શરૂઆત કરવા વેચાણ અથવા ખર્ચ ઉમેરો.",summaryText:"તમારું વેચાણ {sales} રૂપિયા, ખર્ચ {expenses} રૂપિયા, ખર્ચ પછી બાકી {net} રૂપિયા અને ગ્રાહકો પાસેથી લેવાના {dues} રૂપિયા છે.",insightNoData:"માહિતી જોવા વેચાણ, ખર્ચ અથવા ઉધાર ઉમેરો.",insightProfit:"નોંધાયેલું વેચાણ ખર્ચ કરતાં {amount} વધારે છે.",insightLoss:"નોંધાયેલો ખર્ચ વેચાણ કરતાં {amount} વધારે છે. ખર્ચ અને કિંમત તપાસો.",insightDues:"ગ્રાહકો પાસેથી {amount} રૂપિયા લેવાના બાકી છે. નમ્રતાથી યાદ અપાવો.",insightNoDues:"નોંધો મુજબ કોઈ બાકી ઉધાર નથી.",insightSales:"તમે વેચાણ સંબંધિત {count} નોંધો કરી છે.",insightExpense:"તમે ખર્ચની {count} નોંધો કરી છે.",deleted:"નોંધ દૂર થઈ."}
  };
  let language = localStorage.getItem("sakhiledger.language") || "en";
  let entries = loadEntries();

  function loadEntries() {
    try {
      const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      return Array.isArray(data) ? data.filter(x => x && ["sale","expense","udhaar","repayment"].includes(x.type) && Number.isFinite(Number(x.amount))) : [];
    } catch { return []; }
  }
  function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(entries)); }
  function t(key) { return (translations[language] || translations.en)[key] || translations.en[key] || key; }
  function money(value) { return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(value || 0); }
  function dateToday() {
    const d = new Date(); const local = new Date(d.getTime() - d.getTimezoneOffset()*60000);
    return local.toISOString().slice(0,10);
  }
  function totals() {
    const sales = entries.filter(e=>e.type==="sale"||e.type==="udhaar").reduce((s,e)=>s+Number(e.amount),0);
    const expenses = entries.filter(e=>e.type==="expense").reduce((s,e)=>s+Number(e.amount),0);
    const duesAdded = entries.filter(e=>e.type==="udhaar").reduce((s,e)=>s+Number(e.amount),0);
    const duesPaid = entries.filter(e=>e.type==="repayment").reduce((s,e)=>s+Number(e.amount),0);
    return {sales,expenses,net:sales-expenses,dues:Math.max(0,duesAdded-duesPaid)};
  }
  function applyLanguage() {
    document.documentElement.lang = language;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key=el.dataset.i18n;
      if(translations[language][key]) el.textContent=translations[language][key];
    });
    document.querySelectorAll("[data-placeholder]").forEach(el => { el.placeholder=t(el.dataset.placeholder); });
    $("languageSelect").value=language;
    render();
  }
  function addInsight(icon,key,vars={}) {
    const div=document.createElement("div"); div.className="insight";
    const symbol=document.createElement("span"); symbol.className="insight-icon"; symbol.textContent=icon;
    const p=document.createElement("p"); let value=t(key);
    Object.entries(vars).forEach(([k,v])=>{value=value.replace("{"+k+"}",String(v));});
    p.textContent=value; div.append(symbol,p); $("insightsList").append(div);
  }
  function render() {
    const x=totals();
    $("salesTotal").textContent=money(x.sales); $("expensesTotal").textContent=money(x.expenses);
    $("netTotal").textContent=money(x.net); $("duesTotal").textContent=money(x.dues);
    const body=$("recordsBody"); body.replaceChildren();
    if(!entries.length) {
      const tr=document.createElement("tr"),td=document.createElement("td"); td.colSpan=5;td.className="empty-table";td.textContent=t("emptyRecords");tr.append(td);body.append(tr);
    } else {
      [...entries].sort((a,b)=>b.date.localeCompare(a.date)||b.createdAt-a.createdAt).forEach(e=>{
        const tr=document.createElement("tr");
        const date=document.createElement("td");date.textContent=new Date(e.date+"T00:00:00").toLocaleDateString(language==="en"?"en-IN":language==="hi"?"hi-IN":"gu-IN",{day:"numeric",month:"short",year:"numeric"});
        const type=document.createElement("td"),pill=document.createElement("span");pill.className="type-pill "+e.type;pill.textContent=t(({sale:"saleLabel",expense:"expenseLabel",udhaar:"udhaarLabel",repayment:"repaymentLabel"})[e.type]);type.append(pill);
        const detail=document.createElement("td");detail.textContent=[e.person,e.note,e.demo?t("demoTag"):""].filter(Boolean).join(" · ")||t("noName");
        const amount=document.createElement("td");amount.className="amount-cell";amount.textContent=(e.type==="expense"?"−":"+")+money(e.amount);
        const action=document.createElement("td"),del=document.createElement("button");del.className="delete-row";del.type="button";del.textContent="×";del.title="Delete entry";del.setAttribute("aria-label","Delete entry");del.addEventListener("click",()=>{entries=entries.filter(x=>x.id!==e.id);save();render();$("formMessage").textContent=t("deleted");});action.append(del);
        tr.append(date,type,detail,amount,action);body.append(tr);
      });
    }
    const insights=$("insightsList");insights.replaceChildren();
    if(!entries.length) {
      const empty=document.createElement("div");empty.className="empty-insight";const icon=document.createElement("span");icon.textContent="🌱";const p=document.createElement("p");p.textContent=t("emptyInsight");empty.append(icon,p);insights.append(empty);
    } else {
      if(x.net>=0)addInsight("📈","insightProfit",{amount:money(x.net)});else addInsight("🧾","insightLoss",{amount:money(Math.abs(x.net))});
      if(x.dues>0)addInsight("🤝","insightDues",{amount:money(x.dues)});else addInsight("🌿","insightNoDues");
      addInsight("🛍️","insightSales",{count:entries.filter(e=>e.type==="sale"||e.type==="udhaar").length});
      addInsight("📦","insightExpense",{count:entries.filter(e=>e.type==="expense").length});
    }
  }
  $("entryDate").value=dateToday();
  $("languageSelect").value=language;
  $("languageSelect").addEventListener("change",e=>{language=e.target.value;localStorage.setItem("sakhiledger.language",language);applyLanguage();});
  $("entryForm").addEventListener("submit",e=>{
    e.preventDefault();
    const amount=Number($("amount").value),date=$("entryDate").value;
    if(!Number.isFinite(amount)||amount<=0||!date){$("formMessage").textContent=t("invalid");return;}
    entries.push({id:crypto.randomUUID?crypto.randomUUID():String(Date.now()+Math.random()),type:$("entryType").value,amount:Math.round(amount*100)/100,date,person:$("person").value.trim(),note:$("note").value.trim(),createdAt:Date.now(),demo:false});
    save();render();$("entryForm").reset();$("entryDate").value=dateToday();$("formMessage").textContent=t("saved");$("amount").focus();
  });
  $("clearRecords").addEventListener("click",()=>{
    if(!entries.length){$("formMessage").textContent=t("nothingToClear");return;}
    if(confirm(t("confirmClear"))){entries=[];save();render();$("formMessage").textContent=t("clearDone");}
  });
  $("loadDemo").addEventListener("click",()=>{
    if(entries.some(e=>e.demo)){ $("formMessage").textContent=t("demoLoaded");return; }
    const today=dateToday();
    const day=(n)=>{const d=new Date(today+"T00:00:00");d.setDate(d.getDate()-n);return d.toISOString().slice(0,10);};
    const samples=[
      {type:"sale",amount:1800,date:day(0),person:"Walk-in customers",note:"Clothing sales"},
      {type:"expense",amount:650,date:day(0),person:"",note:"Fabric purchase"},
      {type:"udhaar",amount:900,date:day(1),person:"Meena",note:"Two suits"},
      {type:"repayment",amount:300,date:day(0),person:"Meena",note:"Part payment"}
    ];
    samples.forEach((s,i)=>entries.push({...s,id:"demo-"+Date.now()+"-"+i,createdAt:Date.now()+i,demo:true}));
    save();render();$("formMessage").textContent=t("demoLoaded");
  });
  $("speakSummary").addEventListener("click",()=>{
    if(!("speechSynthesis" in window)){ $("formMessage").textContent="Speech playback is not supported in this browser.";return; }
    const x=totals();let message=entries.length?t("summaryText").replace("{sales}",Math.round(x.sales)).replace("{expenses}",Math.round(x.expenses)).replace("{net}",Math.round(x.net)).replace("{dues}",Math.round(x.dues)):t("summaryEmpty");
    const utterance=new SpeechSynthesisUtterance(message);utterance.lang=language==="hi"?"hi-IN":language==="gu"?"gu-IN":"en-IN";speechSynthesis.cancel();speechSynthesis.speak(utterance);
  });
  $("voiceButton").addEventListener("click",()=>{
    const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;
    if(!SpeechRecognition){$("voiceStatus").textContent=t("voiceUnsupported");return;}
    const recognition=new SpeechRecognition();recognition.lang=language==="hi"?"hi-IN":language==="gu"?"gu-IN":"en-IN";recognition.interimResults=false;recognition.maxAlternatives=1;
    $("voiceButton").classList.add("listening");$("voiceStatus").textContent=t("voiceListening");
    recognition.onresult=(event)=>{$("note").value=event.results[0][0].transcript;$("voiceStatus").textContent=t("voiceDone");};
    recognition.onerror=()=>{$("voiceStatus").textContent=t("voiceError");};
    recognition.onend=()=>{$("voiceButton").classList.remove("listening");};
    recognition.start();
  });
  applyLanguage();
})();