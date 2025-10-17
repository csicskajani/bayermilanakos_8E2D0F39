document.addEventListener("DOMContentLoaded", () => {
  renderLeagueTable()
  renderTopPlayers()
  renderMatches()
  initializeTabs()
  animateCounters()
  updateLastUpdated()
  startLiveUpdates()
})

// Animate stat counters
function animateCounters() {
  const counters = document.querySelectorAll(".stat-value[data-target]")

  counters.forEach((counter) => {
    const target = Number.parseInt(counter.getAttribute("data-target"))
    const duration = 2000
    const increment = target / (duration / 16)
    let current = 0

    const updateCounter = () => {
      current += increment
      if (current < target) {
        counter.textContent = Math.floor(current)
        requestAnimationFrame(updateCounter)
      } else {
        counter.textContent = target
      }
    }

    setTimeout(updateCounter, 500)
  })
}

// Render League Table
function renderLeagueTable() {
  const tbody = document.getElementById("leagueTableBody")
  tbody.innerHTML = ""

  window.leagueTableData.forEach((team, index) => {
    const row = document.createElement("tr")
    row.style.animationDelay = `${index * 0.03}s`
    row.style.animation = "fadeInUp 0.4s ease-out forwards"
    row.style.opacity = "0"

    const changeIcon = team.change === "up" ? "▲" : "▼"
    const changeClass = team.change === "up" ? "up" : "down"

    const formBadges = team.form.map((result) => `<span class="form-badge ${result}">${result}</span>`).join("")

    row.innerHTML = `
      <td class="pos-col">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span>${team.pos}</span>
          <span class="position-change ${changeClass}">${changeIcon}</span>
        </div>
      </td>
      <td class="team-col">
        <div class="team-cell">
          <div class="team-logo">${team.team.substring(0, 2).toUpperCase()}</div>
          <span>${team.team}</span>
        </div>
      </td>
      <td>${team.mp}</td>
      <td>${team.w}</td>
      <td>${team.d}</td>
      <td>${team.l}</td>
      <td style="color: ${team.gd > 0 ? "var(--positive)" : team.gd < 0 ? "var(--negative)" : "inherit"}">${
        team.gd > 0 ? "+" : ""
      }${team.gd}</td>
      <td><strong style="color: var(--accent-primary)">${team.pts}</strong></td>
      <td>
        <div class="form">${formBadges}</div>
      </td>
    `

    tbody.appendChild(row)
  })
}

// Render Top Players
function renderTopPlayers() {
  renderPlayerList("scorers", window.topScorersData, "goals")
  renderPlayerList("assists", window.topAssistsData, "assists")
  renderPlayerList("ratings", window.topRatingsData, "rating")
}

function renderPlayerList(tabId, data, highlightStat) {
  const container = document.getElementById(tabId)
  container.innerHTML = ""

  data.forEach((player, index) => {
    const card = document.createElement("div")
    card.className = "player-card"
    card.style.animationDelay = `${index * 0.05}s`
    card.style.animation = "fadeInUp 0.4s ease-out forwards"
    card.style.opacity = "0"

    const initials = player.name
      .split(" ")
      .map((n) => n[0])
      .join("")

    let statsHTML = ""
    if (highlightStat === "goals") {
      statsHTML = `
        <div class="player-stats">
          <div class="player-stat">
            <div class="player-stat-value">${player.goals}</div>
            <div class="player-stat-label">Goals</div>
          </div>
          <div class="player-stat">
            <div class="player-stat-value">${player.assists}</div>
            <div class="player-stat-label">Assists</div>
          </div>
        </div>
      `
    } else if (highlightStat === "assists") {
      statsHTML = `
        <div class="player-stats">
          <div class="player-stat">
            <div class="player-stat-value">${player.assists}</div>
            <div class="player-stat-label">Assists</div>
          </div>
          <div class="player-stat">
            <div class="player-stat-value">${player.goals}</div>
            <div class="player-stat-label">Goals</div>
          </div>
        </div>
      `
    } else {
      statsHTML = `<div class="player-rating">${player.rating}</div>`
    }

    card.innerHTML = `
      <div class="player-rank">${index + 1}</div>
      <div class="player-avatar">${initials}</div>
      <div class="player-info">
        <div class="player-name">${player.name}</div>
        <div class="player-team">${player.team}</div>
      </div>
      ${statsHTML}
    `

    container.appendChild(card)
  })
}

// Render Matches
function renderMatches() {
  const grid = document.getElementById("matchesGrid")
  grid.innerHTML = ""

  window.matchesData.forEach((match, index) => {
    const card = document.createElement("div")
    card.className = "match-card"
    card.style.animationDelay = `${index * 0.08}s`
    card.style.animation = "fadeInUp 0.4s ease-out forwards"
    card.style.opacity = "0"

    const statusClass = match.status === "live" ? "live" : "finished"
    const statusText = match.status === "live" ? `LIVE ${match.time}` : match.time

    card.innerHTML = `
      <div class="match-header">
        <span class="match-league">${match.league}</span>
        <span class="match-status ${statusClass}">${statusText}</span>
      </div>
      <div class="match-teams">
        <div class="match-team">
          <div class="match-team-name">
            <div class="match-team-logo">${match.homeTeam.substring(0, 2).toUpperCase()}</div>
            <span>${match.homeTeam}</span>
          </div>
          <span class="match-score">${match.homeScore}</span>
        </div>
        <div class="match-team">
          <div class="match-team-name">
            <div class="match-team-logo">${match.awayTeam.substring(0, 2).toUpperCase()}</div>
            <span>${match.awayTeam}</span>
          </div>
          <span class="match-score">${match.awayScore}</span>
        </div>
      </div>
      ${match.homeScorers ? `<div class="match-scorers">⚽ ${match.homeScorers}</div>` : ""}
      ${match.awayScorers ? `<div class="match-scorers">⚽ ${match.awayScorers}</div>` : ""}
      <div class="match-footer">
        <span>📍 ${match.venue}</span>
      </div>
    `

    grid.appendChild(card)
  })
}

// Initialize Tabs
function initializeTabs() {
  const tabs = document.querySelectorAll(".tab")
  const panels = document.querySelectorAll(".tab-panel")

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetTab = tab.dataset.tab

      tabs.forEach((t) => t.classList.remove("active"))
      panels.forEach((p) => p.classList.remove("active"))

      tab.classList.add("active")
      document.getElementById(targetTab).classList.add("active")
    })
  })
}

// Update last updated timestamp
function updateLastUpdated() {
  const now = new Date()
  const timeString = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })
  const dateString = now.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })

  document.getElementById("lastUpdated").textContent = `${dateString} at ${timeString}`
}

// Simulate live updates
function startLiveUpdates() {
  setInterval(() => {
    const liveBadges = document.querySelectorAll(".live-badge")
    liveBadges.forEach((badge) => {
      badge.style.animation = "none"
      setTimeout(() => {
        badge.style.animation = "pulse 2s infinite"
      }, 10)
    })
  }, 3000)
}
