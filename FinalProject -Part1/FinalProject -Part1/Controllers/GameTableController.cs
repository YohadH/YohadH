using GameService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FinalProject__Part1.Controllers
{

    //Creating get post put delete method (REST API)
    public class GameTableController : ApiController
    {
        // GET api/GameTable
        public HttpResponseMessage Get()
        {
            using (FinalProjectEntities entities = new FinalProjectEntities())
            {
                return Request.CreateResponse(HttpStatusCode.OK, entities.GameTables.ToList()); // return all the values from the FinalProject.GameTable
            }
        }

        // GET api/GameTable/5
        public HttpResponseMessage Get(int id)
        {
            using (FinalProjectEntities entities = new FinalProjectEntities())
            {
                GameTable gameTable = entities.GameTables.FirstOrDefault(g => g.ID == id);
                if (gameTable != null)
                    return Request.CreateResponse(HttpStatusCode.OK, gameTable); // return  the id of value from the FinalProject.GameTable(per id)
                else
                    return Request.CreateResponse(HttpStatusCode.NotFound, String.Format("This game id {0} was not found", id)); // exsaptions 
            }
        }
        // creating query params that reutrn by this url below where the player name played.
        [Route("api/gametable/byname/{player}")]
        [HttpGet]
        public HttpResponseMessage GetByName(string player)
        {
            using (FinalProjectEntities entities = new FinalProjectEntities())
            {
                List<GameTable> gameTableList = entities.GameTables.Where(p => (p.Player1.ToLower().Contains(player.ToLower())) || (p.Player2.ToLower().Contains(player.ToLower()))).ToList();
                if (gameTableList.Count > 0)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, gameTableList);
                }
                else
                    return Request.CreateResponse(HttpStatusCode.NotFound, string.Format("didnt found name {0}", player)); // return error if player didnt found
            }
        }

        // creating query params by : api/gameTable/filter?id&gamename&player1&player2&whowon
        [Route("api/gametable/search")]
        [HttpGet]
        public HttpResponseMessage search(int id = 0, string game_Name = null, string player1 = null, string player2 = null, string who_Won = null)
        {
            using (FinalProjectEntities entities = new FinalProjectEntities())
            {
                List<GameTable> gameTableList = entities.GameTables.Where(g => id > 0 ? g.ID == id : true)
                    .Where(g => game_Name != null ? g.Game_Name.ToLower().Contains(game_Name.ToLower()) : true)
                    .Where(g => player1 != null ? g.Player1.ToLower().Contains(player1.ToLower()) : true)
                    .Where(g => player2 != null ? g.Player2.ToLower().Contains(player2.ToLower()) : true)
                    .Where(g => who_Won != null ? g.Who_Won.ToLower().Contains(who_Won.ToLower()) : true)
                    .ToList();
                if (gameTableList.Count > 0)
                    return Request.CreateResponse(HttpStatusCode.OK, gameTableList);
                else
                    return Request.CreateResponse(HttpStatusCode.NotFound, String.Format("didnt find any game"));
            }

        }

        // POST api/GameTable
        public HttpResponseMessage Post([FromBody]GameTable gameTable)
        {
            using (FinalProjectEntities entities = new FinalProjectEntities())
            {
                entities.GameTables.Add(gameTable);
                entities.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.Created, new Uri(Request.RequestUri + gameTable.ID.ToString())); // Adding new item to the table in the body of the message
            }
        }

        // PUT api/GameTable/5
        public HttpResponseMessage Put(int id, [FromBody]GameTable gameTable)
        {
            using (FinalProjectEntities entities = new FinalProjectEntities())
            {
                GameTable gameTableUpdate = entities.GameTables.FirstOrDefault(g => g.ID == id);
                if (gameTable != null)
                {
                    gameTableUpdate.Game_Name = gameTable.Game_Name;
                    gameTableUpdate.Player1 = gameTable.Player1;
                    gameTableUpdate.Player2 = gameTable.Player2;
                    gameTableUpdate.Who_Won = gameTable.Who_Won;
                    entities.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.Accepted, gameTable); // update the Gameid by each value.
                }
                else
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, string.Format("Gametable with id {0} was not updated", id));
            }
        }

        // DELETE api/values/5
        public HttpResponseMessage Delete(int id)
        {
            using (FinalProjectEntities entities = new FinalProjectEntities())
            {
                GameTable gameTable = entities.GameTables.FirstOrDefault(g => g.ID == id);
                if (gameTable != null)
                {
                    entities.GameTables.Remove(gameTable);
                    entities.SaveChanges();
                    return Request.CreateErrorResponse(HttpStatusCode.Accepted, string.Format("Gametable with id {0} was deleted", id)); // deleteing the value we chose. 
                }
                else
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, string.Format("Gametable with id {0} was not deleted", id));
            }
        }
    }
}
