const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rneS550dVMdEKWuisWBb/';

export default class InvolvementAPI {
  static getComments = async (itemId) => {
    const response = await fetch(`${url}comments?item_id=${itemId}`);
    const data = await response.json();
    if (data.error === undefined) {
      return data;
    }
    return data.error.status;
  };

  static postComment = async (itemId, username, comment) => {
    try {
      const params = {
        item_id: itemId,
        username,
        comment,
      };
      const response = await fetch(`${url}comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });
      return response.status;
    } catch (err) {
      return err;
    }
  };

  static getLikes = async () => {
    const response = await fetch(`${url}likes`);
    const data = await response.json();
    return data;
  };

  static postLike = async (id) => {
    const response = await fetch(`${url}likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: id }),
    });
    return response.status;
  }

  static getReserve = async (id) => {
    const response = await fetch(`${url}reservations?item_id=${id}`);
    const data = await response.json();
    if (data.error === undefined) {
      return data;
    }
    return data.error.status;
  };

  static postReserve = async (itemID, username, dateStart, dateEnd) => {
    const parameters = {
      item_id: itemID,
      username,
      date_start: dateStart,
      date_end: dateEnd,
    };
    const response = await fetch(`${url}reservations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(parameters),
    });
    return response.status;
  };
}