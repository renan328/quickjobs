using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace quickjobs.DAO
{
    public class ConnectionFactory
    {
        public static MySqlConnection Create()
        {
            string connectionString = "Server=localhost;Database=quickjobs;Uid=root;Pwd=root;";
            return new MySqlConnection(connectionString);
        }
    }
}
