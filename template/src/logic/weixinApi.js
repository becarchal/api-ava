module.exports = class extends think.Logic {
  indexAction() {
  }
  getTemplateListAction() {
    this.allowMethods = 'get';
  }
};
