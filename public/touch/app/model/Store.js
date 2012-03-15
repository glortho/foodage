Ext.define('Store', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'name', type: 'string' }
        ],
        hasMany: 'Employee'
    }
});
