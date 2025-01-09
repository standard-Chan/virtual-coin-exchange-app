# virtual-coin-exchange-app
가상 코인 거래 app

### 컴포넌트 계층 구조

```
CoinApp
│
├── AppLayout
│   ├── AppNav
│   ├── Heading
│   └── Text
│
└── MainPage
    ├── CoinOverView
    │   ├── Heading
    │   └── InlineList
    │       ├── CoinDashlet
    │       ├── CoinDashlet
    │       └── CoinDashlet
    │
    └── TransactionList
        ├── Heading
        └── Card
            ├── Spacing
            │   └── TransactionSearchFilter
            │       └── FormProvider
            │
            └── Spacing
                └── TransactionTable
                    ├── Table
                    │   ├── TableHead
                    │   └── TableBody
                    │       ├── TableRow (key=". $btc")
                    │       └── TableRow (key=". $eth")

```