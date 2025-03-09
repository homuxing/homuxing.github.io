function initSakanaWidget() {
  new SakanaWidget().mount('#sakana-widget');
}
window.onload = function() {
  const script = document.createElement('script')
  const link = document.createElement('link')
  const div = document.createElement('div')
  div.id = 'sakana-widget'
  div.style.position = 'fixed'
  div.style.right = '0'
  div.style.bottom = '0'

  link.rel = 'stylesheet'
  link.href = 'https://cdn.jsdelivr.net/npm/sakana-widget@2.7.0/lib/sakana.min.css'

  script.onload = initSakanaWidget
  script.src = 'https://cdn.jsdelivr.net/npm/sakana-widget@2.7.0/lib/sakana.min.js'

  document.head.appendChild(link)
  document.body.appendChild(div)
  document.body.appendChild(script)

}