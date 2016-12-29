Collection.Score.permit(['insert', 'update', 'remove'])
    .ifHasRole('Setting')
    .apply();