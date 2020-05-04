var PRIVATE_KEY =
  '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCt3Br0ulSqd1gZ\nYTixT4hi98z9VUavN49DmsCzoBWEvsUEXD6NswQ5qpqPbPx+WKv4XyaPJdTuLx3G\nxKDVzDdkgV6Wf/3TY+HU1bzP6Sl4fAXPxygtag3a2HT+kH+yX/IGmrv8gim1NxSG\nsdahIggI7HJaeAjGCvP06tkMG+AkOOJx4X08egNooqXqoLRB6gChKZz1Lvvk2sal\nC/ixuTmGxlUDDkhBzJyG3G0sx+pQ/sH8ZnBvTczYxYjj8l30az/bSP0sGQgHe2GT\nPGZ7mcwJpNfp+t/pMopwrIMQ4HPhb8meAuzAAnlnylnH12d1G1lLINdyvyqBW9OJ\n+c1ensg5AgMBAAECggEAEkLJlAXUKblyR+wlu73qSdbUMZGY5IN16ThiYBuC1xgA\ncoZLza9NVM89/62HUa/3lBVOY/+pv0C0pHF3oS0bblOGP1F/NApMKIIwnDfVssF4\nDMxSxH5cqS1OEITV3MLmFVqAPzPetJlt7v3T2MXNyT4ofqcX6NEysXlPRc3Ru4wP\nrsNr61efxr51jop+nyXGDJ5XaAwHMv5S9FRA10LoeN+PfdN3A8W8to28H/o3k1J+\nNmp6SoAL+wVB5Lk9Xl5hbjlkBxlpNKIXz1U/vWkzDqizXdb0zX2H8YKuRGcSSYPW\nk8KB1yxppDvESTJfKOOUSj0X4z/abl4L1JTHLkutQQKBgQDVJqmF7tNNlAg4WJc0\nQzVMoagkAR+5xK5t3qmrSRay78sWcffQ4AZxZjWPToDEVl5ZBHByblvwAn60f1T1\nNehaM1YUGkeRsVPwEo/XVAgcwtfCSzWwjbkpWE14UmAideqnJTsBgXqQQbD7BnYY\nLfgnDTGFQzR2JCr2Aq9mYMadiQKBgQDQz2hv2JyIx3wgENE0zy4yYAARTtM+EjUW\npQ2+ZH9agjpci+H6YFB2ITYsVQOb0LXi3QvtRNLA7FJcpAT/4cIvGmiu2TK47J2B\noJ5QBJgCGtUd2zrU20Q31LejQkERmRxdrNzovuvZIge4+wm2i76uvlbHrQzmv7DB\ndq5cPaZZMQKBgQCNbFCQH6ytTWnC0OzJ7UnA5YVlFiXRoPDGzzSuBBl+ceHCq61s\nNiewN8uToNeI7XE+CNb+5cA0V8NvyQg6hiD7MBKN1f3kac6ye+5aRVP4mUKElFg0\nI2RWTVNhYO6ODsS5T9d9oUYLzro5Y8kZM+7xIizYKYX2WPr0LUXpXI6LWQKBgD8V\nGdEIWKn90iMB0aIpoSQ42mxgKvNKnt07ef517/+Q7j69R8TTShuWBv63pEJzeC+U\nZiEFNMJx4qP4LUZ8lqSSTuPb3DX/zcm2k31LFf00zAOcEpbxsxdG3T+mKXA+mFI4\ngfiSjT/oxvp8ZL/QUggKmr7yKb6gVK7twtk9Cr9RAoGBAICQfMRo5efFfAJXG9E0\nHOn9Xq5CuDv3jzJqpp3XVDRwymMlgEcw19p9RxE0YI8Q9Tc12iYb47RQW36lNUXP\neMrfCOy6FqL0Gx14lg+VqfXKh5T32z7SsvXcd3U+Z0fa4bscS14QQHLO1gUoFp+x\nxVJEUznNI+Do2b4MinMGVBFk\n-----END PRIVATE KEY-----\n';
var CLIENT_EMAIL = 'datastudiointegration@indigo-earth-268601.iam.gserviceaccount.com';
var REPORT_TYPE = 'AD_PERFORMANCE_REPORT'

// MOCK Do resultado GAM
var resultGamApiMock = [
  { date: '2020/03/18', totalImpressions: 134085, totalClicks: 2779, totalCpmCpcRevenue: 7721.49, totalAverangeEcpm: 57.59, totalCtr: 2.07 },
  { date: '2020/03/19', totalImpressions: 247626, totalClicks: 7902, totalCpmCpcRevenue: 22200.91, totalAverangeEcpm: 89.65, totalCtr: 3.19 },
  { date: '2020/03/20', totalImpressions: 280682, totalClicks: 8988, totalCpmCpcRevenue: 27387.10, totalAverangeEcpm: 97.57, totalCtr: 3.20 },
  { date: '2020/03/21', totalImpressions: 320805, totalClicks: 9881, totalCpmCpcRevenue: 28488.30, totalAverangeEcpm: 88.8, totalCtr: 3.08 },
  { date: '2020/03/22', totalImpressions: 390425, totalClicks: 11238, totalCpmCpcRevenue: 34077.94, totalAverangeEcpm: 87.28, totalCtr: 2.88 },
  { date: '2020/03/23', totalImpressions: 157448, totalClicks: 4057, totalCpmCpcRevenue: 11207.39, totalAverangeEcpm: 71.18, totalCtr: 2.58 },
  { date: '2020/03/24', totalImpressions: 219932, totalClicks: 8573, totalCpmCpcRevenue: 19042.44, totalAverangeEcpm: 86.58, totalCtr: 3.90 }
]

function main() {
  var service = getService('cloud-platform');
  var url = 'https://ads.google.com/apis/ads/publisher/v202002/CompanyService?wsdl'
  var response = UrlFetchApp.fetch(url, {
    headers: {
      Authorization: `Bearer ${service.getAccessToken()}`
    }
  });
  Logger.log(JSON.stringify(({
    headers: {
      Authorization: `Bearer ${service.getAccessToken()}`
    }
  })));
  Logger.log(JSON.stringify(response, null, 2))
}

/**
 * Configura o serviço a ser consultado, usando Biblioteca OAth2 que
 * está nas dependências do projeto.
 * Detalhes em: https://github.com/gsuitedevs/apps-script-oauth2
 */
function getService(serviceName) {
  return OAuth2.createService(serviceName)
    .setTokenUrl('https://oauth2.googleapis.com/token')
    .setPrivateKey(PRIVATE_KEY)
    .setIssuer(CLIENT_EMAIL)
    // .setSubject(USER_EMAIL)
    .setPropertyStore(PropertiesService.getScriptProperties())
    .setScope('https://www.googleapis.com/auth/dfp');
}

newReportSheetData = (data) => {  
  if (data && data.length > 1 ){
    var rowSize = data.length;
    var colSize = data[0].cell.length;
    var reportSpreadSheet = null;
    try {
      reportSpreadSheet = SpreadSheetApp.create('report-result-gam_', rowSize, colSize);


    } catch (error) {
      Logger.log(`Erro ao criar planilha: ${error}`)
    } finally {

    }    
  }else{
    Logger.log('Não existe dados para criar planilha')
  }    
}