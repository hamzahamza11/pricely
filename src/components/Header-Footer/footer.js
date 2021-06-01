function Footer() {
  const coins = [
    {
      name: "btc",
      value: "46.767",
    },
    {
      name: "eth",
      value: "3.927",
    },
    {
      name: "ada",
      value: "345.27",
    },
    {
      name: "dodge",
      value: "54.7",
    },
    {
      name: "xrp",
      value: "6.329",
    },
  ];

  const a = coins.map((elem) => {
    return (
      <div class="footer_coin">
        <div class="footer_coin-name">{elem.name}</div>
        <div class="footer_coin-value">
          {elem.value}
          <span>$</span>
        </div>
      </div>
    );
  });
  return (
    <div className="footer">
      {a}
      {/* <div class="footer_coin">
        <div class="footer_coin-name">btc</div>
        <div class="footer_coin-value">46.4657$</div>
      </div> */}
    </div>
  );
}

export default Footer;
