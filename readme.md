複数行の文字列の各行にタイムスタンプを接頭語として追加した文字列を返します。

```
import { mergeDateformat } from ".";
mergeDateformat(`あいうえお\nかきくけこ\nさしすせそ`);
/*
2018/07/30(月)00:59:59.999 あいうえお
2018/07/30(月)00:59:59.999 かきくけこ
2018/07/30(月)00:59:59.999 さしすせそ
*/
```

pm2のログで使う為に作りました。

## history

- 2018/07/31 v1.0.0公開 npm公開の手順を確認していたので、パッケージ名を変更して再アップロードした。