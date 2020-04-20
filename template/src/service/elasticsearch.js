
module.exports = class extends think.Service {
  // 从elasticsearch全文搜索waste
  async getWastes(wasteName) {
    const sendOptions = {
      method: 'GET',
      url: think.config('elasticsearch.request_url') + '/_search',
      headers: {
        'content-type': 'application/json'
      },
      body: {
        // es DSL查询
        query: {
          match: {
            waste_name: wasteName
          }
        }
      },
      json: true
    };
    try {
      const requestResult = await this.rp(sendOptions);
      if (!(think.isEmpty(requestResult && requestResult.hits && requestResult.hits.hits))) {
        const requestResultHits = requestResult.hits.hits;
        const esList = [];
        for (let i = 0; i < requestResultHits.length; i++) {
          if (requestResultHits[i]._score > 3) {
            esList.push(requestResultHits[i]._source.waste_name);
          }
        }
        return esList;
      }
      return [];
    } catch (err) {
      think.logger.error(`es-getWastes:requestId:${think.uuid()}`, `用户：${think.userId}`, err);
      return [];
    }
  }
};
