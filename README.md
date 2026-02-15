# Inbound Portal Site (Prototype)

訪日観光客向けポータルサイトのプロトタイプです。以下を実装しています。

- インバウンド向けのトップページ
- 多言語・施設掲載・料金プラン・FAQの紹介
- 右下のチャットウィジェット（簡易自動応答 + 有人引き継ぎ想定）

## 起動方法

```bash
python3 -m http.server 4173
```

ブラウザで `http://localhost:4173` を開いてください。

## チャット連携の拡張ポイント

`app.js` の送信処理を API 連携に置き換えることで、以下に接続できます。

- OpenAI / Azure OpenAI などの LLM API
- Zendesk / Intercom などのサポートツール
- CRM (Salesforce, HubSpot など)

