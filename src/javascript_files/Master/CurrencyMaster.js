import React, { useState } from "react";
import "../../css_files/Master/CurrencyMaster.css";
import Table from "../Homepage/Table";
import AddCurrencyMaster from "./AddCurrencyMaster";
import SearchCurrencyMaster from "./SearchCurrencyMaster";

function CurrencyMaster() {
  const [showaddform, setshowaddform] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);
  const tablehead = [
    "Currency Id",
    "Currency Name",
    "Currency Code",
    "Rate",
    "Description",
  ];
  const tabledata = [
    [1, "US Dollar", "USD", 1.0, "Primary currency of the United States"],
    [2, "Euro", "EUR", 0.92, "Official currency of the Eurozone"],
    [3, "British Pound", "GBP", 0.79, "Currency of the United Kingdom"],
    [4, "Indian Rupee", "INR", 83.2, "Official currency of India"],
    [5, "Australian Dollar", "AUD", 1.55, "Currency of Australia"],
    [6, "Canadian Dollar", "CAD", 1.34, "Currency of Canada"],
    [7, "Japanese Yen", "JPY", 148.9, "Currency of Japan"],
    [8, "Swiss Franc", "CHF", 0.87, "Currency of Switzerland"],
    [9, "Chinese Yuan", "CNY", 7.3, "Currency of China"],
    [10, "Brazilian Real", "BRL", 5.1, "Currency of Brazil"],
    [11, "South African Rand", "ZAR", 18.6, "Currency of South Africa"],
    [12, "Mexican Peso", "MXN", 17.5, "Currency of Mexico"],
    [13, "Russian Ruble", "RUB", 96.2, "Currency of Russia"],
    [14, "Singapore Dollar", "SGD", 1.36, "Currency of Singapore"],
    [15, "Hong Kong Dollar", "HKD", 7.83, "Currency of Hong Kong"],
    [16, "New Zealand Dollar", "NZD", 1.67, "Currency of New Zealand"],
    [17, "South Korean Won", "KRW", 1321.8, "Currency of South Korea"],
    [18, "Thai Baht", "THB", 36.4, "Currency of Thailand"],
    [19, "Saudi Riyal", "SAR", 3.75, "Currency of Saudi Arabia"],
    [20, "Turkish Lira", "TRY", 27.1, "Currency of Turkey"],
  ];

  return (
    <>
      <section className="currency-master">
        <h1>Currency Master</h1>
        <blockquote className="currency-master-forms">
          <button onClick={() => setshowaddform(true)}>
            Add Currency Master
          </button>
          <button onClick={() => setshowsearchform(true)}>
            Search Currency Master
          </button>
        </blockquote>
        {showaddform && <AddCurrencyMaster setshowaddform={setshowaddform} />}
        {showsearchform && (
          <SearchCurrencyMaster setshowsearchform={setshowsearchform} />
        )}
        <Table tablehead={tablehead} tabledata={tabledata} />
      </section>
    </>
  );
}

export default CurrencyMaster;
