function sortByKey(array, key, exarg)
{
    if (exarg == null)
    {
        return array.sort(function(a, b)
        {
            var x = a[key];
            var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }
    else if (exarg == "i")
    {
        return array.sort(function(a, b)
        {
            var x = a[key].toLowerCase();
            var y = b[key].toLowerCase();
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }
}

function toggleCase(val)
{
    if (isUpperCase(val))
    {
        return val.toLowerCase();
    }
    if (isLowerCase(val))
    {
        return val.toUpperCase();
    }
}

function isLowerCase(val)
{
    if (val == val.toLowerCase())
    {
        return true;
    }
}

function isUpperCase(val)
{
    if (val == val.toUpperCase())
    {
        return false;
    }
}