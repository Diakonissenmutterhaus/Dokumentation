# Migração dos dados das Schwestern para o novo notebook

## 1️⃣ Preparar os documentos e marcadores
Exportar os marcadores (Favoriten) do Firefox no PC antigo:

No Firefox, vá em **Lesezeichen → Lesezeichen verwalten → Importieren und Sichern → Sichern**.

Salve o arquivo `.json` ou `.html` no pendrive.

Organizar os documentos:

Crie pastas claras e organizadas no PC antigo (por exemplo: `Dokumente`, `Fotos`, `Berichte`).

Mova todos os arquivos importantes para essas pastas.

Copie todas as pastas organizadas para o pendrive.

## ✉️ 2️⃣ Configurar o Thunderbird no novo notebook
### Instalar e abrir o Thunderbird
Baixe e instale o Thunderbird no novo notebook (versão mais recente) e abra o programa.

### Criar uma nova conta IMAP
1. Vá em `Extras` → `Konten-Einstellungen...`.
2. Clique em `Konten-Aktionen` (canto inferior esquerdo).
3. Selecione `E-Mail-Konto hinzufügen...`.
4. Insira nome, endereço de e-mail e senha, depois clique em **Weiter**.
5. O Thunderbird detecta as configurações automaticamente.
6. Selecione **IMAP (remote Ordner)** e clique em **Fertig** para finalizar.

Servidor IMAP: `mail1.hostthenet.de`

### Mover e-mails do POP3/local para IMAP
No painel esquerdo, abra a conta POP3 antiga ou **Lokale Ordner**. Acesse a pasta **Posteingang** ou outras pastas onde houver e-mails salvos.

Selecione todos os e-mails (`Ctrl + A`) e use **Verschieben nach** (Mover para) ou **Kopieren nach** (Copiar para) selecionando a conta IMAP recém-configurada.

> Se mover (*Verschieben*), os e-mails saem da conta antiga e vão para o servidor IMAP.
> Se copiar (*Kopieren*), permanecem em ambos os lugares.

## 🗂️ 3️⃣ Transferir marcadores do Firefox
No novo notebook, abra o Firefox e vá em **Lesezeichen → Lesezeichen verwalten → Importieren und Sichern → Wiederherstellen** (ou **Aus Datei importieren** se exportou em HTML). Selecione o arquivo salvo no pendrive.

## ✅ 4️⃣ Conclusão
Confirme que todos os documentos, e-mails e marcadores foram transferidos corretamente. Organize as pastas no novo notebook conforme necessário e teste o envio e recebimento de e-mails no Thunderbird.
