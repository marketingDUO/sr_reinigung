# SR Gebäudereinigung GmbH

Statische Website in `dist/`. GitHub Actions überträgt Änderungen auf `main` per SFTP zu Hetzner.

Secrets: `HETZNER_HOST`, `HETZNER_USER`, `HETZNER_PASSWORD`, `HETZNER_PORT`.

Das Ziel ist `/` innerhalb des SFTP-Zugangs. Dieser muss ausschließlich auf den Website-Ordner zeigen. Vorhandene fremde Dateien werden nicht gelöscht.

Kontaktversand und vollständige Firmendaten sind noch zu ergänzen. Die Objektanfrage erstellt derzeit eine lokale Zusammenfassung.
