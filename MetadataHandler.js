class MetadataHandler {
  static formatMetadata(name, description, image, attributes) {
    return { name, description, image, attributes, timestamp: Date.now() };
  }
  static validateMetadata(meta) {
    return !!(meta.name && meta.description && meta.image);
  }
}
module.exports = MetadataHandler;
