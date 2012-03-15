Ext.define('Employee', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'name_first', type: 'string' },
            { name: 'name_last', type: 'string' },
            { name: 'store_id', type: 'int' }
        ],
        belongsTo: 'Store'
    }
});
