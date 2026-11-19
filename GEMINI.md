# 와우리말 (Waurimal) 프로젝트 지침

## 📌 작업 완료 시 Git 자동 커밋 및 푸시 규칙 (Auto Git Commit & Push)
- 코드, 스타일, 데이터셋, 마크업 등의 **수정 작업이 끝나면 항상 즉시 Git에 커밋하고 원격 저장소에 푸시(`git push`)**합니다.
- 특히 `mafia` 게임의 경우:
  1. 작업 폴더(`01_edtech_games/mafia`)에서 변경 사항 확인 및 문법 검증
  2. 배포 미러 폴더(`01_edtech_games/waurimal.github.io/mafia`)로 최신 파일 동기화 복사
  3. `01_edtech_games/mafia` 저장소에서 명확한 커밋 메시지로 커밋
  4. `git push origin main` 및 `git push origin main:gh-pages`를 실행하여 실시간 웹 호스팅까지 모두 배포 완료
