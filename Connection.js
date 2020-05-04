getAuthType = () => {
  var response = { type: 'NONE' };
  return response;
}

isAdminUser = () => {
  return true
}

getConfig = () => {
  var cc = DataStudioApp.createCommunityConnector();
  var config = cc.getConfig();

  config.newInfo()
    .setId('Instruções')
    .setText('Esse conector irá carregar o data source do GAM')

  config.setDateRangeRequired(false);

  return config.build();
}

getFields = request => {
  var cc = DataStudioApp.createCommunityConnector();
  var fields = cc.getFields();
  var types = cc.FieldType;
  var aggregations = cc.AggregationType;

  fields.newDimension()
    .setId('packageName')
    .setType(types.TEXT);

  fields.newMetric()
    .setId('downloads')
    .setType(types.NUMBER)
    .setAggregation(aggregations.SUM);

  fields.newDimension()
    .setId('day')
    .setType(types.YEAR_MONTH_DAY);

  return fields;
}

getSchema = request => {
  var fields = getFields(request).build();
  return { schema: fields };
}

responseToRows = (requestedFields, response, packageName) => {
  return response.map(dailyDownload => {
    var row = [];
    requestedFields.asArray().forEach(field => {
      switch (field.getId()) {
        case 'day':
          return row.push(dailyDownload.day.replace(/-/g, ''));
        case 'downloads':
          return row.push(dailyDownload.downloads);
        case 'packageName':
          return row.push(packageName);
        default:
          return row.push('');
      }
    });
    return { values: row }
  })
}

getData = request => {
  var requestedFieldIds = request.fields.map(field => field.name);
  var requestedFields = getFields().forIds(requestedFieldIds);

  var url = [
    'https://api.npmjs.org/downloads/range/',
    request.dateRange.startDate, ':',
    request.dateRange.endDate, '/',
    request.configParams.package
  ];

  var response = UrlFetchApp.fetch(url.join(''));
  var parsedResponse = JSON.parse(response).downloads;
  var rows = responseToRows(requestedFields, parsedResponse, request.configParams.package);

  return {
    schema: requestedFields.build(),
    rows: rows
  }
}