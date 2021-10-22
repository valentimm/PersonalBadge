const linksSocialMedia = {
  github: 'valentimm',
  youtube: 'watch?v=G1GQq7AfF2Y',
  facebook: 'Mathe.Valentim',
  instagram: 'mathdud',
  twitter: 'nomathim'
}

function addSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    //alert(li.children[0].href)
  }
}
addSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userLink.href = data.html_url
      gitBio.textContent = data.bio
      profilePicture.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGithubProfileInfos()
